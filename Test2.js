$("#search-icon").click(function() {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});

 var slideIndex = 0;
  var slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");

  setInterval(function() {
    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }

    // Increment slide index
    slideIndex++;

    // Reset slide index if it goes out of bounds
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    // Show current slide
    slides[slideIndex].classList.add("active");
  }, 3000);
  
  
const menuIcon = document.querySelector('.menu-icon');
const navbarList = document.querySelector('.navbar ul');

menuIcon.addEventListener('click', () => {
  navbarList.classList.toggle('show');
});

