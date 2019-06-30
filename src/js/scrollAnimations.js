const parallaxCustom = () => {
  handleParallaxWithFadeOut();
};

const handleParallaxWithFadeOut = () => {
  const movingBackground = document.querySelector(
    '.parallax-header__background'
  );

  window.onscroll = () => {
    // Parallax scrolling
    movingBackground.style.marginTop =
      Math.floor(window.pageYOffset / 3, 2) + 'px';

    // Fading out
    movingBackground.style.opacity =
      1 - window.pageYOffset / movingBackground.clientHeight;
  };
};

export default parallaxCustom;
