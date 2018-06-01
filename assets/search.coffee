---
# Jekyll front matter needed to trigger coffee compilation
---
# Search Box Element
# =============================================================================
# Programmatically add the search box to the site
# This allows the search box to be hidden if javascript is disabled
siteNavElement = document.getElementsByClassName("site-nav")[0]
siteSearchElement = document.createElement("div")
siteSearchElement.classList.add("site-search")
siteSearchElement.innerHTML = """
<svg class="search-icon" viewBox="0 0 18 18" width="18" height="18">
  <path ill="#222222" d="M12.43 11.73C13.41 10.59 14 9.11 14 7.5 14 3.91 11.09 1 7.5 1S1 3.91 1 7.5 3.91 14 7.5 14c1.61 0 3.09-.59 4.23-1.57l.7-.7zM7.5 12C5.01 12 3 9.99 3 7.5S5.01 3 7.5 3 12 5.01 12 7.5 9.99 12 7.5 12z"/>
  <path fill="#222222" d="M12.41293 11l4.7982 4.79818-1.41423 1.41422L11 12.39863"/>
</svg>
"""
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
  if searchBoxElement.value.length > 0
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
  req.timeout=1000
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
translateLunrResults = (lunrResults) ->
  lunrResults.slice(0, maxResults);
  return lunrResults.map (result) ->
    matchedDocument = sectionIndex[result.ref]
    snippets = [];
    # Loop over matching terms
    for term of result.matchData.metadata
      # Loop over the matching fields for each term
      fields = result.matchData.metadata[term]
      for field of fields
        positions = fields[field].position
        positions = positions.slice(0, 3)
        # Loop over the position within each field
        for positionIndex of positions
          position = positions[positionIndex]
          # Add to the description the snippet for that match
          preMatch = matchedDocument[field].substring(
            position[0] - snippetSpace,
            position[0]
          )
          match = matchedDocument[field].substring(
            position[0],
            position[0] + position[1]
          )
          postMatch = matchedDocument[field].substring(
            position[0] + position[1],
            position[0] + position[1] + snippetSpace
          )
          snippet = '...' + preMatch + '<strong>' + match + '</strong>' + postMatch + '...  '
          snippets.push snippet
          if (snippets.length >= maxSnippets) then break
        if (snippets.length >= maxSnippets) then break
      if (snippets.length >= maxSnippets) then break
    # Build a simple flat object per lunr result
    return {
      title: matchedDocument.title
      description: snippets.join('');
      url: matchedDocument.url
    }


# Displays the search results in HTML
# Takes an array of objects with "title" and "description" properties
renderSearchResults = (searchResults) ->
  container = document.getElementsByClassName('search-results')[0]
  container.innerHTML = ''
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
    reg = /\<strong\>(.+?)\<\/strong\>/g
    match = reg.exec content 
    if match
      terms.push match[1]
    while match != null
      match = reg.exec content
      if match
        terms.push match[1]

  url = result._source.url
  if terms.length > 0
    set = {}
    set[term.toLowerCase()] = 0 for term in terms
    terms = Object.keys set
    urlparts = url.split '#'
    urlparts.splice(1,0,'?terms=',encodeURI(terms.join(' ')), '#')
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
  title_q = { "match_phrase_prefix": {"title":{"query": queryStr, "slop":3,"max_expansions":10, "boost":2}} }
  content_q = { "match_phrase_prefix":{"content":{"query":queryStr, "slop":3,"max_expansions":10 }} }
  bool_q = { "bool" : { "should" : [ title_q, content_q ] }}

  highlight = {}
  highlight.require_field_match = false
  highlight.fields = {}
  highlight.fields['content'] = {"fragment_size" : 80, "number_of_fragments" : 3, "pre_tags" : ["<strong>"], "post_tags" : ["</strong>"] }

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
  lunrResults = searchIndex.search(query + "~1")
  results = translateLunrResults(lunrResults)
  renderSearchResults results

# Enable the searchbox once the index is built
enableSearchBox = (searchIndex) ->
  searchBoxElement.removeAttribute "disabled"
  searchBoxElement.classList.remove('loading')
  searchBoxElement.setAttribute "placeholder", "Search"
  searchBoxElement.addEventListener 'input', (event) ->
    toc = document.getElementsByClassName('table-of-contents')[0]
    searchResults = document.getElementsByClassName('search-results')[0]
    query = searchBoxElement.value
    if query.length == 0
      searchResults.setAttribute 'hidden', true
      toc.removeAttribute 'hidden'
    else
      toc.setAttribute 'hidden', ''
      searchResults.removeAttribute 'hidden'
  searchBoxElement.addEventListener 'input',
    debounce( () ->
      query = searchBoxElement.value
      if query.length > 0
        if searchOnServer
          esSearch(query)
        else
          lunrSearch(searchIndex, query)
    200, !searchOnServer)

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


  if path.endsWith '/'
    selectedAnchors = document.querySelectorAll "a.nav-link[href$='" + path + "']"
  else
    selectedAnchors = document.querySelectorAll "a.nav-link[href^='" + path + "']"
  if selectedAnchors.length > 0
    for i in [0...selectedAnchors.length]
      selectedAnchors[i].classList.add('selected')
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
# Map the popstate event
window.addEventListener "popstate", (event) ->
  path = window.location.pathname
  setSelectedAnchor path
  page = pageIndex[path]
  # Only reflow the main content if necessary
  testBody = new DOMParser().parseFromString(page.content, "text/html").body;
  if main.innerHTML.trim() isnt testBody.innerHTML.trim()
    main.innerHTML = page.content
