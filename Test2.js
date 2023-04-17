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
  
  
  let cart = [];

function addToCart(item) {
  cart.push(item);
  alert("Item added to cart");
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i] === item) {
      cart.splice(i, 1);
      alert("Item removed from cart");
      return;
    }
  }
  alert("Item not found in cart");
}

function displayCart() {
  let cartItems = "";
  for (let i = 0; i < cart.length; i++) {
    cartItems += cart[i] + "\n";
  }
  alert("You have the following items in your cart:\n" + cartItems);
}

