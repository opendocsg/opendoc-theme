---
# Jekyll front matter needed to trigger coffee compilation
---
# Search Box Element
# =============================================================================
# Programmatically add the search box to the site
# This allows the search box to be hidden if javascript is disabled
siteNavElement = document.getElementsByClassName("site-search")[0]
siteSearchElement = document.createElement("div")
siteSearchElement.classList.add("search-container")
siteSearchElement.innerHTML = """<image class="search-icon" src="/assets/images/search-icon.png" width="24" height="20" />"""

clearButton = document.createElement("label");
clearButton.classList.add("clear-button");
clearButton.innerHTML = """
<svg class="clear-icon" viewBox="0 0 18 18" width="18" height="18">
  <path d="M2.42755 1L17.0331 15.60554l-1.41423 1.4142L1 2.38402"/>
  <path d="M1 15.51932L15.51933 1l1.4142 1.4142L2.2978 17.0331"/>
</svg>
"""
searchBoxElement = document.createElement("input")
searchBoxElement.id = "search-box"
searchBoxElement.setAttribute("type", "text")
searchBoxElement.setAttribute("placeholder", "Building site hierarchy...")
searchBoxElement.setAttribute("disabled", "")
siteSearchElement.prepend(clearButton)
siteSearchElement.prepend(searchBoxElement)
siteNavElement.prepend(siteSearchElement)
clearButton.onclick = ->
  searchBoxElement.value = ""
  searchBoxElement.dispatchEvent(new Event('input', {
    'bubbles': true
    'cancelable': true
  }))

searchBoxElement.oninput = (event) ->
  if searchBoxElement.value && searchBoxElement.value.trim().length > 0
    siteSearchElement.classList.add "filled"
  else
    siteSearchElement.classList.remove "filled"

{% capture endpoint %}
{% if site.environment == "DEV" %}
{{ site.server_DEV | append: '/' |  append: site.elastic_search.index | jsonify }}
{% elsif site.environment == "LOCAL" %}
{{ site.server_LOCAL | append: '/' | append: site.elastic_search.index | jsonify }}
{% else %}
'INVALID-ENVIRONMENT'
{% endif %}
{% endcapture %}
endpoint = {{endpoint}}
search_endpoint = endpoint + '/search'
# Data Blob
# =============================================================================
# The main "blob" of site data constructed by liquid
# We cherry pick to minimize size
# Also because jsonify doesn't work quite right and collapses the page objects
# into just strings when we jsonify the whole site
site =
  title: {{ site.title | jsonify }}
  url: {{ site.url | jsonify }}
pages = [
  {% for site_page in site.html_pages %}
    {% unless site_page.exclude %}

      {% capture name %}{{ site_page.name }}{% endcapture %}
      {% if site_page.title == null %}
      {% capture title %}{% assign words  = name | remove_first: '.md' | split: '-' %}{% for word in words %}{{ word | capitalize }} {% endfor %}{% endcapture %}
      {% else %}
      {% capture title %}{{ site_page.title }}{% endcapture %}
      {% endif %}
      {
        "name": {{name | jsonify}},
        "title": {{title | jsonify}},
        # For consistency all page markdown is converted to HTML
        {% if site_page.url == page.url %}
        "content": {{ site_page.content | jsonify }},
        {% else %}
        "content": {{ site_page.content | markdownify | jsonify }},
        {% endif %}
        "url": {{ site_page.url | relative_url | jsonify }}
      }
    {% endunless %}
  {% endfor %}
]

pageIndex = {}
pageOrder = [
  {% for section_title in site.section_order %}
    {{ section_title | jsonify }}
  {% endfor %}
]
if pageOrder.length > 0
  pages.sort (a, b) -> return if pageOrder.indexOf(a.title) < pageOrder.indexOf(b.title) then -1 else 1
else
  pageOrder = [
    {% for site_page in site.html_pages %}
      {{ site_page.name | jsonify }}
    {% endfor %}
  ]
  pages.sort (a, b) -> return if pageOrder.indexOf(a.name) < pageOrder.indexOf(b.name) then -1 else 1


pages.forEach (page) -> pageIndex[page.url] = page


# Site Hierarchy
# =============================================================================

# Build a site hierarchy tree of nested sections
# Each section has a representative component
# An array of its own text
# and an array of subsections
siteHierarchy = {
  component: site
  title: site.title
  url: site.url
  text: []
}
sectionIndex = {}
initSubsections = (pages) ->
    sections = pages.map (page) ->
        root =
            parent: siteHierarchy
            component: page
            title: page.title
            url: page.url
            text: [] # Will be converted into a single string later
            subsections: []
        return root
    return sections

# Parse page html and build a section hierarchy per page
siteHierarchy.subsections = initSubsections(pages)

buildNav = (section) ->
  navBranch = document.createElement('div')
  navBranch.classList.add('nav-branch')
  navLinkElement = document.createElement('a')
  navLinkElement.classList.add('nav-link')
  navLinkElement.setAttribute('href', section.url)
  navLinkElement.innerHTML = section.title
  navBranch.appendChild(navLinkElement)
  section.subsections.forEach (section) ->
    navBranch.appendChild(buildNav(section))
  return navBranch

startBuildingHierarchy = () ->

  promise = new Promise (resolve, reject) ->
    statusElement = document.createElement('div')
    statusElement.id = 'hierarchyWorkerStatus'
    statusElement.textContent = 'Building site hierarchy'
    statusElement.classList.add('loading')
    document.body.append(statusElement)
    worker = new Worker("{{ '/assets/hierarchyWorker.js' | relative_url }}" )
    worker.onmessage = (event) ->
      worker.terminate()
      statusElement.remove()
      renderToc(event.data.hierarchy)
      sectionIndex = event.data.sectionIndex
       # Build a serializable array for sending to workers
      serializableSiteSections = Object.values(sectionIndex).map (section) ->
        serializableSection = Object.assign({}, section)
        delete serializableSection.parent
        delete serializableSection.component
        delete serializableSection.subsections
        return serializableSection
      resolve serializableSiteSections
    worker.onerror = (error) ->
      Promise.reject(error)
    worker.postMessage pages
  return promise

startBuildingIndex = (sections) ->
  searchBoxElement.setAttribute("placeholder", "Building search index...")
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
  req=new XMLHttpRequest()
  # req.timeout=1000
  req.addEventListener 'readystatechange', ->
    if req.readyState is 4 # ReadyState Complete
      successResultCodes=[200,304]
      if req.status not in successResultCodes
        hierarchyPromise = startBuildingHierarchy()
        hierarchyPromise.then (sections) ->
          indexPromise = startBuildingIndex sections
          indexPromise.then (searchIndex) ->
            resolve(searchIndex)
      else
        searchOnServer = true
        resolve 'Connected to server'

  req.open 'GET', search_endpoint, true
  req.setRequestHeader 'X-Requested-With', 'XMLHttpRequest'
  req.send ''

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
      fields = result.matchData.metadata[term]
      for field of fields
        positions = fields[field].position
        rangesByFields[field] = if rangesByFields[field] then (rangesByFields[field].concat positions) else positions
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
          highlightRanges = highlightRanges.concat([range[2], range[3]])
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
          snippet += matchedText.substring position[i],position[i+1]
        snippet += '...' 
        snippets.push(snippet)
    # Build a simple flat object per lunr result
    return {
      title: matchedDocument.title
      description: snippets.join(' ');
      url: matchedDocument.url
    }


# Displays the search results in HTML
# Takes an array of objects with "title" and "description" properties
renderSearchResults = (searchResults) ->
  container = document.getElementsByClassName('search-results')[0]
  container.innerHTML = '<h1>Search Results</h1>'
  searchResults.forEach (result) ->
    element = document.createElement('a')
    element.classList.add 'nav-link'
    element.setAttribute 'href', result.url
    element.innerHTML = result.title
    description = document.createElement('p')
    description.innerHTML = result.description
    element.appendChild description
    container.appendChild element
    return
  return

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
    searchResults.hits.hits.forEach (result) ->
      formatted = formatResult result
      element = document.createElement('a')
      element.classList.add 'nav-link'
      element.setAttribute 'href', formatted.url
      element.innerHTML = formatted.title
      description = document.createElement('p')
      if formatted.content
        description.innerHTML = "..." + formatted.content + "..."
      element.appendChild description
      container.appendChild element
      return
    return

formatResult = (result) ->
  terms = []
  content = null
  if result.highlight && result.highlight.content
    content = result.highlight.content.join '...'

    # We don't use regex here because we want to concatenate phrases for highlighting.
    # For example, searching for 'make a will' can return fragments like
    # 1) 'will not be able to <strong>make</strong>'
    # 2) '<strong>a</strong> <strong>Will</strong>'
    # We want to highlight 'make' or 'a Will', but not 'a' , or 'Will' by themselves
    # This should return ['make', 'a will']
    start = '<mark><strong>'
    end = '</strong></mark>'
    curr = content.trimLeft()
    s = curr.indexOf(start)
    e = curr.indexOf(end)
    k = ''
    while s > -1 and e > -1
      if e > s
        k = curr.substring(s+start.length, e).toLowerCase()
        if(terms.length > 0 and s <2)
          terms[terms.length - 1] = terms[terms.length - 1] + ' ' + k
        else
          terms.push(k)
        curr = curr.substring(e+end.length).trimLeft()
        s = curr.indexOf(start)
        e = curr.indexOf(end)

    #For display purpose, only return 3 fragments max
    content = result.highlight.content.slice(0, Math.min(3, result.highlight.content.length))

  url = result._source.url
  if terms.length > 0
    set = {}
    set[term] = 0 for term in terms
    terms = Object.keys set
    urlparts = url.split '#'
    urlparts.splice(1,0,'?terms=',encodeURI(terms.join('|')), '#')
    url = urlparts.join ''

  return {url: url, content: content, title: result._source.title}

debounce = (func, wait, immediate) ->
  timeout = null
  (args...) ->
    context = this
    later = () ->
      timeout = null
      if not immediate
        func.apply(context, args)

    callImmediately = immediate && not timeout
    clearTimeout timeout
    timeout = setTimeout later, wait
    if callImmediately
      func.apply(context, args)

createEsQuery = (queryStr) ->
  source = ['title','url']
  title_q = { "match": {"title":{"query": queryStr,"max_expansions":10, "fuzziness": "AUTO", "boost":2}} }
  content_q = { "match":{"content":{"query":queryStr,"max_expansions":10, "fuzziness": "AUTO"}} }
  bool_q = { "bool" : { "should" : [ title_q, content_q ] }}

  highlight = {}
  highlight.require_field_match = false
  highlight.fields = {}
  highlight.fields['content'] = {"fragment_size" : 80, "number_of_fragments" : 6, "pre_tags" : ["<mark><strong>"], "post_tags" : ["</strong></mark>"] }

  {"_source": source, "query" : bool_q, "highlight" : highlight}

# Call the API
esSearch = (query) ->
  #console.log 'Executing debounced query: ' , query
  req=new XMLHttpRequest()
  req.addEventListener 'readystatechange', ->
    if req.readyState is 4 # ReadyState Complete
      successResultCodes=[200,304]
      if req.status in successResultCodes
        result = JSON.parse req.responseText
        if typeof result.error == 'undefined'
          renderSearchResultsFromServer result.body
        else
          renderSearchResultsFromServer result.error
      else
        renderSearchResultsFromServer  'Error retrieving search results ...'

  esQuery = createEsQuery query
  req.open 'POST', search_endpoint, true
  req.setRequestHeader 'Content-Type', 'application/json'
  req.setRequestHeader 'X-Requested-With', 'XMLHttpRequest'
  req.send JSON.stringify esQuery

lunrSearch = (searchIndex, query) ->
  # https://lunrjs.com/guides/searching.html
  queryTerm = '*' + query + '*'
  console.log queryTerm
  lunrResults = searchIndex.search queryTerm
  results = translateLunrResults lunrResults 
  renderSearchResults results

# Enable the searchbox once the index is built
enableSearchBox = (searchIndex) ->
  searchBoxElement.removeAttribute "disabled"
  searchBoxElement.classList.remove('loading')
  searchBoxElement.setAttribute "placeholder", "Search document"
  searchBoxElement.addEventListener 'input', (event) ->
    toc = document.getElementsByClassName('table-of-contents')[0]
    searchResults = document.getElementsByClassName('search-results')[0]
    query = searchBoxElement.value.trim()
    if query.length < minQueryLength
      searchResults.setAttribute 'hidden', true
      toc.removeAttribute 'hidden'
    else
      toc.setAttribute 'hidden', ''
      searchResults.removeAttribute 'hidden'
      debounce( () ->
        if searchOnServer
          esSearch(query)
        else
          lunrSearch(searchIndex, query)
      100, !searchOnServer)()

searchIndexPromise.then (searchIndex) ->
  enableSearchBox(searchIndex)
  if searchOnServer
    startBuildingHierarchy()

setSelectedAnchor = (path) ->
  # Make the nav-link pointing to this path selected
  selectedBranches = document.querySelectorAll("div.nav-branch.expanded")
  for i in [0...selectedBranches.length]
    selectedBranches[i].classList.remove('expanded')

  selectedAnchors = document.querySelectorAll("a.nav-link.selected")
  for i in [0...selectedAnchors.length]
    selectedAnchors[i].classList.remove('selected')


  selectedAnchors = document.querySelectorAll "a.nav-link[href$='" + path + "']"
  if selectedAnchors.length > 0
    selectedAnchors[0].classList.add('selected')
    selectedAnchors[0].parentNode.classList.add('expanded')

# Table of Contents
# =============================================================================
# Table of contents rendering
renderToc = (siteHierarchy) ->
  tocElement = document.getElementsByClassName("table-of-contents")[0]
  tocElement.innerHTML = ""

  siteHierarchy.subsections.forEach (section) ->
    tocElement.appendChild(buildNav(section))

  setSelectedAnchor window.location.pathname

renderToc siteHierarchy

# HTML5 History
# =============================================================================
# Setup HTML 5 history for single page goodness
main = document.getElementsByTagName("main")[0]
menuToggle = document.getElementById("menu-toggle")
document.body.addEventListener("click", (event) ->
  # Check if its within an anchor tag any any point
  # Traverse up its click tree and see if it affects any of them
  # If it does not find anything it just terminates as a null
  anchor = event.target
  while (anchor? and anchor.tagName isnt "A")
    anchor = anchor.parentNode
  if anchor? and anchor.host is window.location.host and !anchor.hasAttribute("download")
    event.preventDefault()
    event.stopPropagation()
    # Need to hide the menu on mobile
    # On desktop this conveniently leaves it open which is intended behavior
    menuToggle.checked = false
    history.pushState(null, null, anchor.href)
    if anchor.hash.length > 0 then window.location = anchor.hash
    else window.location = "#"
, true)


# Highlighting
# =============================================================================
parseQuery = (query) ->
    result = {}
    if query.startsWith '?'
        queryParts = query.substring(1).split('&')
        queryParts.forEach (part) ->
            idx = part.indexOf '='
            key = if idx > -1 then part.substring 0, idx else part
            if !result[key]?
                result[key] = []
            result[key].push part.substring idx+1

    return result

highlight = (node) ->
    parsed = parseQuery ( window.location.search )
    accuracy = 'accuracy'
    allowedValues = {'0': 'partially','1': 'complementary','2': 'exactly'}
    if parsed.terms?
        instance = new Mark(node)
        mark = if parsed.terms.length == 1 then parsed.terms[0].split encodeURI('|') else parsed.terms
        mark = mark.map (x) ->
            decodeURI x
        acc = if parsed.accuracy? and allowedValues[parsed.accuracy[0]]? then parsed.accuracy[0] else '2'
        instance.mark(mark, {accuracy: allowedValues[acc], caseSensitive: false, separateWordSearch : false})


# Event when path changes
# =============================================================================
# Map the popstate event
window.addEventListener "popstate", (event) ->
  path = window.location.pathname
  setSelectedAnchor path
  page = pageIndex[path]

  # Only reflow the main content if necessary
  testBody = new DOMParser().parseFromString(page.content, "text/html").body
  if main.innerHTML.trim() isnt testBody.innerHTML.trim()
    main.innerHTML = page.content

  highlight(main)
