const handleNavbar = () => {
  const handleScroll = () => {
    document.onscroll = () => {
      const navbar = document.querySelector('.navbar');

      if (window.pageYOffset > 50) {
        navbar.classList.add('navbar--scrolled');
      } else {
        navbar.classList.remove('navbar--scrolled');
      }
    };
  };

  const handleDrawer = () => {
    const togglers = document.querySelectorAll('.drawer-toggler');
    const drawer = document.querySelector('.navbar__drawer');
    const menu = document.querySelector('.navbar__drawer__menu');

    togglers.forEach(toggler => {
      toggler.onclick = () => {
        if (drawer.classList.contains('navbar__drawer--opened')) {
          menu.classList.remove('navbar__drawer__menu--active');
          setTimeout(() => {
            document.querySelector('html').style.overflow = 'auto';
            drawer.classList.remove('navbar__drawer--opened');
          }, 200);
        } else {
          document.querySelector('html').style.overflow = 'hidden';
          drawer.classList.add('navbar__drawer--opened');

          setTimeout(() => {
            menu.classList.add('navbar__drawer__menu--active');
          }, 200);
        }
      };
    });
  };

  handleDrawer();
  handleScroll();
};

export default handleNavbar;
