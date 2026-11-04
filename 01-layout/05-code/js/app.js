
// Menu Burger 
const trigger = document.getElementById('mburger');
const options = document.querySelector('nav.options');

trigger.addEventListener('click', function() {
  this.classList.toggle('active');
  options.classList.toggle('active');
});


// Carousels 
document.querySelectorAll('.carousel-container').forEach((container) => {
  const carousel = container.querySelector('.carousel');
  const card = carousel.querySelector('figure, img');
  const moveCarousel = (direction) => carousel.scrollBy({ left: direction * card.offsetWidth });

  container.querySelector('.prev-btn').addEventListener('click', () => moveCarousel(-1));
  container.querySelector('.next-btn').addEventListener('click', () => moveCarousel(1));
});
