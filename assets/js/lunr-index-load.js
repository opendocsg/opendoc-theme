import lunr from './assets/js/lunr.min.js'

var getLunrIndex = function(lunrIndexUrl) {
    return fetch(lunrIndexUrl)
        .then(function (res) {
            if (res.status === 200) {
                return res.json()
            }
            throw new Error('Failed with HTTP code: ' + res.status)
        }, function (err) {
            self.postMessage('Fetch promise to retrieve Lunr Index was rejected: ' + err)
        })
        .then(function (json) {
            self.postMessage({
                index: lunr.Index.load(json.index),
                sectionIndex: json.sectionIndex
            })
        })
        .catch(function (err) {
            self.postMessage('Fetch failed to get the Lunr index: ' + err)
        })
}

// passing in URL to load
self.addEventListener('message', function(e) {
    getLunrIndex(e.data)
})
