(function () {
	window.onload = function () {
		window.setTimeout(fadeout, 500);
	};
  function fadeout() {
		document.querySelector(".page-loader").style.opacity = "0";
		document.querySelector(".page-loader").style.display = "none";
	}
	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		var sticky = header_navbar.offsetTop;
		if (window.pageYOffset > sticky) {
			header_navbar.classList.add("sticky");
		} else {
			header_navbar.classList.remove("sticky");
		}


	};





  //===== mobile-menu-btn
	let navbarToggler = document.querySelector(".navbar-toggler");
	navbarToggler.addEventListener("click", function () {
		navbarToggler.classList.toggle("active");
	});


})();
