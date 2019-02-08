(function () {
	if (Popper) {
		var feedbackButton = document.getElementById('contact-us')
		var banner = document.getElementById('banner')
		banner.style.display = 'flex'
		var popper = new Popper(feedbackButton, banner, {
			placement: 'bottom'
		})
		var closeBannerButton = document.getElementById('close-banner')
		closeBannerButton.onclick = function () {
			popper.destroy()
			banner.style.display = 'none'
		}

		// Remove banner after a while
		setTimeout(function () {
			closeBannerButton.onclick()
		}, 8000)
	}
})()
