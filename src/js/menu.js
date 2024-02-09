let menuButton = document.getElementById('menu-toggle');
let blur = document.querySelector('.section__start');
menuButton.addEventListener('change', function() {
    if (this.checked) {
        blur.classList.add('blur')
    } else {
        blur.classList.remove('blur')
    }
  });
