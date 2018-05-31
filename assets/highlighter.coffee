---
# Jekyll front matter needed to trigger coffee compilation
---

highlight = () ->
    key = "terms="
    query = window.location.search || ('?'+key)
    queryValue = query.substring(query.indexOf(key)+key.length)
    nextKey = queryValue.indexOf('&')
    if nextKey > -1
        value = queryValue.substring(0, nextKey)
    else
        value = queryValue
    valueArr = value.split(encodeURI( ' ' ))
    instance = new Mark(document.querySelector("main"))
    instance.mark(valueArr, {"accuracy":"complementary"})

highlight()