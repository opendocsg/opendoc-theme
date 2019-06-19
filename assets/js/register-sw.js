if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function (registration) {
            console.log("ServiceWorker registration successful with scope: ", registration.scope)
        }).catch(function (err) {
            console.log("ServiceWorker registration failed: ", err)
        })

        window.addEventListener('appinstalled', function(e) {
            alert('SW detect installed')
            var msgChannel = new MessageChannel()
            function replyHandler (event) {
                console.log('reply handler received: ')
                console.log(event)
                if (event.data === 'done') {
                    console.log('SW replied with done')
                    // sw is done caching
                    document.getElementById('sw-loading-icon').style.display = 'none'
                }
            }
            msgChannel.port1.addEventListener('message', replyHandler)

            navigator.serviceWorker.ready.then(function(registration) {
                // Tell sw to start caching process, may take several seconds
                console.log('SW detected as ready')
                navigator.serviceWorker.controller.postMessage('appinstalled', [msgChannel.port2])
                document.getElementById('sw-loading-icon').style.display = 'block'
            })
        })
    })
}
