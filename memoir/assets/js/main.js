(function () {
	window.onload = function () {
		window.setTimeout(fadeout, 500);
	};
  function fadeout() {
		document.querySelector(".page-loader").style.opacity = "0";
		document.querySelector(".page-loader").style.display = "none";
	}

})();
