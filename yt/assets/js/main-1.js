/*
Template Name: Appvilla - Creative Landing Page HTML Template.
Author: GrayGrids
*/

(function () {
  //===== Prealoder

  window.onload = function () {
      window.setTimeout(fadeout, 500);
  }

  function fadeout() {
      document.querySelector('.preloader').style.opacity = '0';
      document.querySelector('.preloader').style.display = 'none';
  }


  /*=====================================
  Sticky
  ======================================= */
  window.onscroll = function () {
      var header_navbar = document.querySelector(".navbar-area");
      var sticky = header_navbar.offsetTop;


      if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");

      } else {
        header_navbar.classList.remove("sticky");

      }

      // show or hide the back-top-top button
      var backToTo = document.querySelector(".scroll-top");
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          backToTo.style.display = "flex";
      } else {
          backToTo.style.display = "none";
      }
  };


    //========= testimonial
    tns({
      container: '.testimonial-slider',
      items: 3,
      slideBy: 'page',
      autoplay: false,
      mouseDrag: true,
      gutter: 0,
      nav: true,
      controls: true,
      controlsText: ['<i class="lni lni-chevron-left"></i>', '<i class="lni lni-chevron-right"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        540: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
        1170: {
          items: 1,
        }
      }
    });




  // WOW active
  new WOW().init();



  //===== mobile-menu-btn
  let navbarToggler = document.querySelector(".mobile-menu-btn");
  navbarToggler.addEventListener('click', function () {
      navbarToggler.classList.toggle("active");
  });

//========= glightbox
const glightbox = GLightbox({
  selector: ".glightbox",
});






})();
