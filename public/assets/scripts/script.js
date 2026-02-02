document.addEventListener('DOMContentLoaded', function () {
	// 1. Hamburger Menu Toggle
	const menuToggle = document.getElementById('menu-toggle');
	const navLinks = document.getElementById('nav-links');

	if (!menuToggle || !navLinks) {
		console.error('Error: menu-toggle or nav-links not found!');
		return;
	}

	menuToggle.addEventListener('click', function (event) {
		event.stopPropagation();
		navLinks.classList.toggle('active');
		console.log('Menu Toggle Clicked');
		console.log('Active class added:', navLinks.classList.contains('active'));
	});

	// Close the menu if clicked outside
	document.addEventListener('click', function (event) {
		if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) { // = 'if navLinks doesn't contain a child matching the event target....'
			navLinks.classList.remove('active');
			console.log('Menu closed');
		}
	});


	// 2. Resize and Dock elements on Scroll
	const logo = document.querySelector("a .logo");
	const navBar = document.querySelector(".navbar");
	const navWhiteBar = document.querySelector(".navbar-white-space");

	window.addEventListener("scroll", function () {
		const scrollY = window.scrollY;

		if (window.scrollY > 20) {
			logo.classList.add("shrink");
			navBar.classList.add("shrink-navbar");
		} 
		if (this.window.scrollY > 40) {
			navWhiteBar.classList.add("give-shadow");
		}
		else {
			logo.classList.remove("shrink");
			navBar.classList.remove("shrink-navbar");
			navWhiteBar.classList.remove("give-shadow");
			// ctaBlock.classList.remove("give-margin");
			// navBarText.classList.remove("shrink-nav-text");
		}
	});
});





