---
# Jekyll front matter needed to trigger coffee compilation
---
# Web worker used to build hierarchy
importScripts("{{ '/assets/jsdom.js' | relative_url }}")
console.log "Hierarchy Worker initialized"

DOM_API = new jsdom.JSDOM().window
# Helper function which returns a flat list of header and text nodes
HEADER_TAGS = ["H1", "H2", "H3", "H4", "H5", "H6"]
getHeadersAndText = (root)->
  walker = DOM_API.document.createTreeWalker(
    root
    DOM_API.NodeFilter.SHOW_ALL
    acceptNode: (node)->
      # Grab header tags for building a table of contents
      if HEADER_TAGS.indexOf(node.tagName) >= 0
        return DOM_API.NodeFilter.FILTER_ACCEPT
      # Reject the immediate children of header tags
      # Since they are already included under their parent
      if HEADER_TAGS.indexOf(node.parentNode.tagName) >= 0
        return DOM_API.NodeFilter.FILTER_REJECT
      # Add basic text nodes inbetween headers
      if node.nodeType is 3 then return DOM_API.NodeFilter.FILTER_ACCEPT
      # Skip everything else
      return DOM_API.NodeFilter.FILTER_SKIP
    false
  )
  nodes = []
  while node = walker.nextNode() then nodes.push node
  return nodes

buildHierarchy = (pages) -> 
  siteHierarchy = {
    component: {}
    title: 'Init title'
    url: 'Init Url'
    text: []
  }
  siteHierarchy.subsections = pages.map (page) ->
    #body = new DOMParser().parseFromString(page.content, 'text/html').body
    body = new jsdom.JSDOM(page.content).window.document.body
    headersAndText = getHeadersAndText(body)
    root =
      parent: siteHierarchy
      component: page
      title: page.title
      url: page.url
      text: [] # Will be converted into a single string later
      subsections: []
    # Iterate through the html nodes and build the section tree depth first
    currentSection = root
    headersAndText.forEach (node) ->
      # Text nodes get added under the current header
      if HEADER_TAGS.indexOf(node.tagName) < 0
        currentSection.text.push node.textContent
        return
      # If you're bigger then climb the tree till you're not
      # Then add yourself and drill down
      # #lifeprotips
      while (
        HEADER_TAGS.indexOf(node.tagName) <=
        HEADER_TAGS.indexOf(currentSection.component.tagName)
      ) then currentSection = currentSection.parent
      newSection =
        parent: currentSection
        component: node
        title: node.textContent
        url: page.url + "#" + node.id
        text: []
        subsections: []
      currentSection.subsections.push newSection
      currentSection = newSection
    return root
  return siteHierarchy

buildSectionIndex = (siteHierarchy) -> 
  # Bake in each section's text into a single string
  queue = [siteHierarchy]
  while queue.length > 0
    section = queue.shift()
    section.text = section.text.join('').trim()
    queue.push.apply queue, section.subsections

  # Compress the tree by merging redundant sections
  # Defined as sections with no text of their own and only 1 sub section
  queue = [siteHierarchy]
  while queue.length > 0
    section = queue.shift()
    # Contract
    # The parent section effectively consumes the child
    # And gains the power of TWO sections a la Cell and Android 18
    while section.subsections.length == 1 and section.text.length == 0
      section.text += section.subsections[0].text
      section.subsections = section.subsections[0].subsections
      section.subsections.forEach (child) -> child.parent = section
    queue.push.apply queue, section.subsections

  # Build an index to easily retrive sections by url
  sectionIndex = {}
  stack = [siteHierarchy]
  while stack.length > 0
    section = stack.pop()
    stack.push.apply(stack, section.subsections.slice().reverse())
    sectionIndex[section.url] = section

 
  
  return sectionIndex


@onmessage = (event) => 
  console.log "Starting to build site sections"
  pages = event.data
  siteHierarchy = buildHierarchy pages
  sectionIndex = buildSectionIndex siteHierarchy
  console.log "Done building site sections"
  @postMessage {hierarchy: siteHierarchy, sectionIndex: sectionIndex}

