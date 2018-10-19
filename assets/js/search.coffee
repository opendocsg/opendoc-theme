---
# Jekyll front matter needed to trigger coffee compilation
---
# Search Box Element
# =============================================================================
# This allows the search box to be hidden if javascript is disabled
toc = document.getElementsByClassName('table-of-contents')[0]
siteSearchElement = document.getElementsByClassName('search-container')[0]
searchBoxElement = document.getElementById('search-box')
clearButton = document.getElementsByClassName('clear-button')[0]
clearButton.onclick = ->
  searchBoxElement.value = ''
  searchBoxElement.dispatchEvent(new Event('input', {
    'bubbles': true
    'cancelable': true
  }))

searchBoxElement.oninput = (event) ->
  if searchBoxElement.value && searchBoxElement.value.trim().length > 0
    siteSearchElement.classList.add 'filled'
  else
    siteSearchElement.classList.remove 'filled'

siteNav = document.getElementsByClassName('site-nav')[0]
searchBoxElement.onfocus = (event) ->
  siteNav.classList.add 'keyboard-expanded'
searchBoxElement.onblur = (event) ->
  siteNav.classList.remove 'keyboard-expanded'

# Assign search endpoint based on env config
# ===========================================================================
endpoint = null
env = '{{ jekyll.environment }}'
elasticSearchIndex = '{{site.github.owner_name}}-{{site.github.repository_name}}'

if env == 'production'
  endpoint = {{ site.server_PROD | append: '/' | jsonify }} + elasticSearchIndex
else
  # Allow overriding of search index in dev env
  configElasticSearchIndex = '{{site.elastic_search.index}}'
  if configElasticSearchIndex then elasticSearchIndex = configElasticSearchIndex
  endpoint = {{ site.server_DEV | append: '/' | jsonify }} + elasticSearchIndex

search_endpoint = endpoint + '/search'


# Global Variables
# =============================================================================

wordsToHighlight = []
sectionIndex = {}
lunrIndex = null

# Site Hierarchy
# =============================================================================

startBuildingIndex = (sections) ->
  searchBoxElement.setAttribute('placeholder', 'Building search index...')
  promise = new Promise (resolve, reject) ->
    worker = new Worker("{{ '/assets/worker.js' | relative_url }}")
    worker.onmessage = (event) ->
      worker.terminate()
      resolve lunr.Index.load event.data
    worker.onerror = (error) ->
      Promise.reject(error)
    worker.postMessage sections
  return promise

searchOnServer = false
searchIndexPromise = new Promise (resolve, reject) ->
  req = new XMLHttpRequest()
  # req.timeout=1000
  req.addEventListener 'readystatechange', ->
    if req.readyState is 4 # ReadyState Complete
      successResultCodes = [200, 304]
      if req.status not in successResultCodes
        startBuildingLunrIndex resolve
      else
        searchOnServer = true
        resolve 'Connected to server'

  req.open 'GET', search_endpoint, true
  req.setRequestHeader 'X-Requested-With', 'XMLHttpRequest'
  req.send ''

startBuildingLunrIndex = (cb) -> 
  startLunrIndexing().then (results) ->
    sectionIndex = results.sectionIndex
    lunrIndex = lunr.Index.load results.index
    cb()

# Search
# =============================================================================
# Helper function to translate lunr search results
# Returns a simple {title, description, link} array
snippetSpace = 40
maxSnippets = 4
maxResults = 10
minQueryLength = 3
translateLunrResults = (allLunrResults) ->
  lunrResults = allLunrResults.slice(0, maxResults)
  return lunrResults.map (result) ->
    matchedDocument = sectionIndex[result.ref]
    snippets = []
    snippetsRangesByFields = {}
    # Loop over matching terms
    rangesByFields = {}
    # Group ranges according to field type (text/title)
    for term of result.matchData.metadata
      # To highlight the main body later
      wordsToHighlight.push term
      fields = result.matchData.metadata[term]
      for field of fields
        positions = fields[field].position
        rangesByFields[field] =
          if rangesByFields[field]
          then (rangesByFields[field].concat positions)
          else positions
    snippetCount = 0
    # Sort according to ascending snippet range
    for field of rangesByFields
      ranges = rangesByFields[field]
        .map (a) ->
          return [a[0] - snippetSpace, a[0] + a[1] + snippetSpace, a[0], a[0] + a[1]]
        .sort (a,b) ->
          return a[0] - b[0]
      # Merge contiguous ranges
      startIndex = ranges[0][0]
      endIndex = ranges[0][1]
      mergedRanges = []
      highlightRanges = []
      for rangeIndex, range of ranges
        snippetCount++
        if range[0] <= endIndex
        then (
          endIndex = Math.max range[1], endIndex
          highlightRanges = highlightRanges.concat [range[2], range[3]]
        )
        else
          mergedRanges.push [startIndex].concat highlightRanges .concat [endIndex]
          startIndex = range[0]
          endIndex = range[1]
          highlightRanges = [range[2], range[3]]
        if snippetCount >= maxSnippets
          mergedRanges.push [startIndex].concat highlightRanges .concat [endIndex]
          snippetsRangesByFields[field] = mergedRanges
          break
        if +rangeIndex == ranges.length - 1
          if snippetCount + 1 < maxSnippets
            snippetCount++
          mergedRanges.push [startIndex].concat highlightRanges .concat [endIndex]
          snippetsRangesByFields[field] = mergedRanges
      if snippetCount >= maxSnippets
        break
    # Extract snippets and add highlights to search results
    for field, positions of snippetsRangesByFields
      for position in positions
        matchedText = matchedDocument[field]
        snippet = ''
        # If start of matched text dont use ellipsis
        if position[0] > 0 then snippet += '...'
        snippet += matchedText.substring position[0], position[1]
        for i in [1..position.length - 2]
          if i % 2 == 1 then snippet += '<mark>' else snippet += '</mark> '
          snippet += matchedText.substring position[i], position[i + 1]
        snippet += '...'
        snippets.push(snippet)
    # Build a simple flat object per lunr result
    return {
      title: matchedDocument.title
      description: snippets.join ' '
      url: matchedDocument.url
    }

# Displays the search results in HTML
# Takes an array of objects with "title" and "description" properties
renderSearchResults = (searchResults) ->
  container = document.getElementsByClassName('search-results')[0]
  container.innerHTML = '<h1>Search Results</h1>'
  searchResults.forEach (result, i) ->
    element = document.createElement('a')
    element.classList.add 'nav-link'
    element.href = result.url
    element.innerHTML = result.title
    description = document.createElement('p')
    description.innerHTML = result.description
    element.appendChild description
    # For ga tracking
    element.onmouseup = ->
      trackSearch searchBoxElement.value.trim(), i, false
    container.appendChild element

renderSearchResultsFromServer = (searchResults) ->
  container = document.getElementsByClassName('search-results')[0]
  container.innerHTML = ''
  if typeof searchResults.hits == 'undefined'
    error = document.createElement('p')
    error.innerHTML = searchResults
    container.appendChild error
  else if searchResults.hits.hits.length == 0
    error = document.createElement('p')
    error.innerHTML = 'Results matching your query were not found.'
    error.classList.add('not-found')
    container.appendChild error
  else
    searchResults.hits.hits.forEach (result, i) ->
      formatted = formatResult result
      element = document.createElement('a')
      element.classList.add 'nav-link'
      # required to set relative url for es search results
      element.href = "{{ '/' | relative_url }}" +  formatted.url
      element.innerHTML = formatted.title
      description = document.createElement('p')
      if formatted.content
        description.innerHTML = '...' + formatted.content + '...'
      element.appendChild description
      # For ga tracking
      element.onmouseup = ->
        trackSearch searchBoxElement.value.trim(), i, false
      container.appendChild element
    highlightBody()

formatResult = (result) ->
  terms = []
  content = null
  title = result._source.title
  start = '<mark>'
  end = '</mark>'
  regex = /<mark>(.*?)<\/mark>/g
  # If adjacent highlighted terms, combine them
  joinHighlights = (str) ->
    if str then str.replace(/<\/mark> <mark>/g, ' ')
  if result.highlight
    ['title', 'content'].forEach (field) ->
      if ( result.highlight[field])
        curr = result.highlight[field].join '...'

        # For example, searching for 'make a will' can return fragments like
        # 1) 'will not be able to <strong>make</strong>'
        # 2) '<strong>a</strong> <strong>Will</strong>'
        # We want to highlight 'make' or 'a Will', but not 'a' , or 'Will' by themselves
        # This should return ['make', 'a will']

        curr = curr.trimLeft()
        # Join highlights that are next to each other
        curr = joinHighlights curr
        match = true
        while match
            match = regex.exec curr
            if match
              term = match[1].toLowerCase()
              if ( wordsToHighlight.indexOf term ) < 0 then wordsToHighlight.push term

  #For display purpose, only return 3 fragments max
  if result.highlight.content then content = joinHighlights result.highlight.content.slice(0, Math.min(3, result.highlight.content.length)).join('...')
  if result.highlight.title then title = joinHighlights result.highlight.title[0]
  url = result._source.url

  return { url: url, content: content, title: title }

debounce = (func, threshold, execAsap) ->
  timeout = null
  (args...) ->
    obj = this
    delayed = ->
      func.apply(obj, args) unless execAsap
      timeout = null
    if timeout
      clearTimeout(timeout)
    else if (execAsap)
      func.apply(obj, args)
    timeout = setTimeout delayed, threshold || 100

createEsQuery = (queryStr) ->
  source = [ 'title', 'url' ]
  title_automcomplete_q = { 'match_phrase_prefix': { 'title': { 'query': queryStr, 'max_expansions':20, 'boost': 40, 'slop': 10 } } }
  content_automcomplete_q = { 'match_phrase_prefix': { 'content':{ 'query': queryStr, 'max_expansions':20, 'boost': 30, 'slop': 10 } } }
  title_keyword_q = { 'match': { 'title': { 'query': queryStr, 'fuzziness': 'AUTO', 'max_expansions':10, 'boost': 20, 'analyzer': 'stop' }}}
  content_keyword_q = { 'match': { 'content': { 'query': queryStr, 'fuzziness': 'AUTO', 'max_expansions':10 , 'analyzer': 'stop' }}}
  bool_q = {'bool': {'should': [ title_automcomplete_q, content_automcomplete_q, title_keyword_q, content_keyword_q ] }}

  highlight = {}
  highlight.require_field_match = false
  highlight.fields = {}
  highlight.fields['content'] = {'fragment_size' : 80, 'number_of_fragments' : 6, 'pre_tags' : ['<mark>'], 'post_tags' : ['</mark>'] }
  highlight.fields['title'] = {'fragment_size' : 80, 'number_of_fragments' : 6, 'pre_tags' : ['<mark>'], 'post_tags' : ['</mark>'] }

  {'_source': source, 'query' : bool_q, 'highlight' : highlight}

# Call the API
esSearch = (query) ->
  req = new XMLHttpRequest()
  req.addEventListener 'readystatechange', ->
    if req.readyState is 4 # ReadyState Complete
      successResultCodes = [200,304]
      if req.status in successResultCodes
        result = JSON.parse req.responseText
        if typeof result.error == 'undefined'
          renderSearchResultsFromServer result.body
        else
          renderSearchResultsFromServer result.error
      else
        renderSearchResultsFromServer 'Error retrieving search results ...'

  esQuery = createEsQuery query
  req.open 'POST', search_endpoint, true
  req.setRequestHeader 'Content-Type', 'application/json'
  req.setRequestHeader 'X-Requested-With', 'XMLHttpRequest'
  req.send JSON.stringify esQuery

lunrSearch = (query) ->
  # https://lunrjs.com/guides/searching.html
  # Add wildcard before and after
  queryTerm = '*' + query + '*'
  lunrResults = lunrIndex.search queryTerm
  results = translateLunrResults lunrResults
  highlightBody()
  renderSearchResults results

# Enable the searchbox once the index is built
enableSearchBox = ->
  searchBoxElement.removeAttribute 'disabled'
  searchBoxElement.classList.remove('loading')
  searchBoxElement.setAttribute 'placeholder', 'Search document'
  searchBoxElement.addEventListener 'input', (e) ->
    if e.target.value == ''
      onSearchChange()
    else
      onSearchChangeDebounced()

onSearchChange = ->
  searchResults = document.getElementsByClassName('search-results')[0]
  query = searchBoxElement.value.trim()
  wordsToHighlight = []
  if query.length < minQueryLength
    searchResults.setAttribute 'hidden', true
    toc.removeAttribute 'hidden'
    highlightBody()
  else
    toc.setAttribute 'hidden', ''
    searchResults.removeAttribute 'hidden'
    if searchOnServer
      esSearch query 
    else
      lunrSearch query
onSearchChangeDebounced = debounce(onSearchChange, 500, false)

searchIndexPromise.then ->
  enableSearchBox()

setSelectedAnchor = ->
  path = window.location.pathname
  hash = window.location.hash
  # Make the nav-link pointing to this path selected
  selectedBranches = document.querySelectorAll('li.nav-branch.expanded')
  for i in [0...selectedBranches.length]
    selectedBranches[i].classList.remove('expanded')

  selectedAnchors = document.querySelectorAll('a.nav-link.selected')
  for i in [0...selectedAnchors.length]
    selectedAnchors[i].classList.remove('selected')


  selectedAnchors = document.querySelectorAll 'a.nav-link[href$="' + path + '"]'
  if selectedAnchors.length > 0
    selectedAnchors[0].parentNode.classList.add('expanded')

  if hash.length > 0
    selectedAnchors = document.querySelectorAll 'a.nav-link[href$="' + path + hash + '"]'
    if selectedAnchors.length > 0
      selectedAnchors.forEach (anchor) ->
        anchor.classList.add('selected')
  
setSelectedAnchor()

# HTML5 History
# =============================================================================
# Setup HTML 5 history for single page goodness
main = document.getElementsByTagName('main')[0]
document.body.addEventListener('click', (event) ->
  # Check if its within an anchor tag any any point
  # Traverse up its click tree and see if it affects any of them
  # If it does not find anything it just terminates as a null
  anchor = event.target
  while (anchor? and anchor.tagName isnt 'A')
    anchor = anchor.parentNode
  if anchor? and ( anchor.host == '' or anchor.host is window.location.host ) and !anchor.hasAttribute('download')
    event.preventDefault()
    event.stopPropagation()
    if anchor.hash.length > 0 
      if ( window.location.pathname + window.location.hash ).endsWith anchor.hash
        # If clicked on the same anchor, just scroll to view
        scrollToView()
        return
      window.location = anchor.hash
    else 
      window.location = '#'
    # This does not trigger hashchange for IE but is needed to replace the url
    history.pushState null, null, anchor.href
, true)


# Highlighting
# =============================================================================

highlightBody = ->
  # Check if Mark.js script is already imported
  if Mark
    instance = new Mark(main)
    instance.unmark()
    if wordsToHighlight.length > 0
      instance.mark wordsToHighlight, {
          exclude: [ 'h1' ],
          accuracy: {
            value: 'exactly',
            limiters: [',', '.', '(', ')', '-', '\'', '[', ']', '?' , '/', '\\', ':', '*', '!', '@', '&']
          },
          separateWordSearch: false
      }

# Event when path changes
# =============================================================================
onHashChange = (event) ->
  # Hide menu if sub link clicked or clicking on search results

  path = window.location.pathname
  setSelectedAnchor()
  page = pageIndex[path]
  # Only reflow the main content if necessary
  if page
    originalBody = new DOMParser().parseFromString(page.content, 'text/html').body
    if main.innerHTML.trim() isnt originalBody.innerHTML.trim()
      main.innerHTML = page.content
      document.title = page.title

  # Make sure it is scrolled to the anchor
  scrollToView()

  # Make sure the header is hidden when navigating
  if window.location.hash.replace('#', '').length > 0 || toc.hidden
    window.dispatchEvent(new Event('link-click'))

  highlightBody()

scrollToView = ->
  id = window.location.hash.replace '#', ''
  topOffset = document.getElementsByTagName('header')[0].offsetHeight
  top = 0
  if id.length > 0 
    anchor = document.getElementById id
    if anchor
      top = anchor.offsetTop
      # hardcoded: topOffset not needed for mobile view
      if not isMobileView() then top -= topOffset
  window.scrollTo 0, top
  
# Dont use onpopstate as it is not supported in IE 
window.addEventListener 'hashchange', onHashChange

# Scroll to view onload
window.onload = scrollToView