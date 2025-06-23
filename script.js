// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Hero Slider (only on index.html)
const heroSlides = document.querySelectorAll('.hero-slide');
if (heroSlides.length > 0) {
  let currentHeroSlide = 0;

  function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextHeroSlide() {
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    showHeroSlide(currentHeroSlide);
  }

  let heroInterval = setInterval(nextHeroSlide, 5000);

  document.querySelector('.hero').addEventListener('mouseenter', () => {
    clearInterval(heroInterval);
  });

  document.querySelector('.hero').addEventListener('mouseleave', () => {
    heroInterval = setInterval(nextHeroSlide, 5000);
  });

  showHeroSlide(currentHeroSlide);
}

// Owl Carousel for Achievements
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });
});

// Gallery Carousel (only on gallery.html)
const carousel = document.querySelector('#carousel-images');
if (carousel) {
  let currentSlide = 0;
  const totalSlides = 7;

  function showSlide(index) {
    currentSlide = index;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    carousel.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  let autoSlide = setInterval(nextSlide, 5000);

  carousel.parentElement.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
  });

  carousel.parentElement.addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 5000);
  });

  showSlide(currentSlide);
}