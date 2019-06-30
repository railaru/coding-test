import Glide from '@glidejs/glide';

const handleSlider = () => {
  const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 4,
    keyboard: true,
    breakpoints: {
      1199: {
        perView: 4
      },
      800: {
        perView: 3
      },
      639: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  });

  const buildDots = () => {
    var items = document.querySelectorAll('.glide__slide');
    var dots = document.querySelector('.glide__dots');

    if (items.length > 1) {
      [].forEach.call(items, (el, i) => {
        dots.innerHTML += `<div class="glide__dot" data-glide-dir="=${i}"></div>`;
      });
    }
  };

  buildDots();
  glide.mount();
};

export default handleSlider;
