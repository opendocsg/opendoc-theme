// Query - current search string
// Result - order of result that was clicked
// Online - Whether online/offline search is used
var trackSearch = function(query, result, online) {
    if (typeof ga !== 'undefined') {
        ga('send', 'event', {
            eventCategory: online ? 'search' : 'lunr-search',
            eventAction: 'input',
            eventLabel: query,
            eventValue: result
        })
    }
}

var trackButton = function(buttonName, state, mobile) {
    if (typeof ga !== 'undefined') {
        ga('send', 'event', {
            eventCategory: 'button',
            eventAction: 'click',
            eventLabel: mobile ? 'mobile-' + buttonName : buttonName,
            eventValue: state
        })
    }
}


