// Query - current search string
// Result - order of result that was clicked
// Online - Whether online/offline search is used
var trackSearch = function(query, result, online) {
    if (ga) {
        ga('send', 'event', {
            eventCategory: online ? 'search' : 'lunr-search',
            eventAction: 'input',
            eventLabel: query,
            eventValue: result
        })
    }
}

