// Toggle the mobile menu
const navbar = document.querySelector('.navbar');
const menusection = document.querySelector('.menu-section');
menusection.addEventListener('click', () => {
  navbar.classList.toggle('navbar-active');
});



// Highlight the active section in the navbar
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const currentSection = Math.floor(window.scrollY / window.innerHeight);
});

// Display a popup when a menu item is clicked
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const itemName = item.querySelector('h3').textContent;
    const itemDesc = item.querySelector('p').textContent;
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
      <div class="popup-content">
        <h3>${itemName}</h3>
        <p>${itemDesc}</p>
        <button class="close-btn">Close</button>
      </div>
    `;
    document.body.appendChild(popup);
    const closeBtn = popup.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      popup.remove();
    });
  });
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides();

