---
# Jekyll front matter needed to trigger coffee compilation
---

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
        acc = if parsed.accuracy? and allowedValues[parsed.accuracy[0]]? then parsed.accuracy[0] else '1'
        instance.mark(mark, {accuracy: allowedValues[acc], caseSensitive: false, separateWordSearch : false})
        


window.addEventListener 'popstate', highlight document.querySelector('main')
