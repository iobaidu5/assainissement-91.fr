$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
  });
  
  const nav = document.querySelector(".Navbar");
  window.addEventListener("scroll", fixNav);
  
  function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
      nav.classList.add("navbar-active");
    } else {
      nav.classList.remove("navbar-active");
    }
  }
  
  var owl = $(".owl");
  owl.owlCarousel({
    items: 2,
    navigation: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: false,
    margin: 30,
    smartSpeed: 450,
    // animateIn: "fadeIn",
    // animateOut: "fadeOut",
    navText: [
      "<i class='fas fa-circle nav-left'></i>",
      "<i class='fas fa-circle nav-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      350: {
        items: 1,
        nav: true,
      },
      380: {
        items: 1,
        nav: true,
      },
      400: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },
      990: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 2,
        nav: false,
      },
      1600: {
        items: 2,
        nav: true,
        loop: false,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [5000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
  

  document.getElementById('date').valueAsDate = new Date();