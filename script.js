document
	.querySelectorAll('[data-email]')
	.forEach(function replaceEmail (element) {
		const realEmail = atob(element.dataset.email)

		const a = document.createElement('a')
		a.innerText = realEmail
		a.href = 'mailto:' + realEmail

		const parent = element.parentNode
		parent.insertBefore(a, element)
		parent.removeChild(element)
	})
