const trigger = document.getElementById('mburger');
const options = document.querySelector('nav.options');

  trigger.addEventListener('click', function() {
    this.classList.toggle('active');
    options.classList.toggle('active');
  });