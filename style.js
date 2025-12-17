document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger');
  const mobileMenu = document.querySelector('.header__mobile-menu');
  const links = document.querySelectorAll('.mobile-menu__link');

  if (!burger || !mobileMenu) return;

  const toggleMenu = () => {
    header.classList.toggle('header--mobile-open');
  };

  // Открыть/закрыть по бургеру
  burger.addEventListener('click', toggleMenu);

  // Закрыть по клику на ссылку
  links.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('header--mobile-open');
    });
  });

  // Закрыть по клику вне меню
  document.addEventListener('click', (e) => {
    const isClickInside = header.contains(e.target);
    if (!isClickInside && header.classList.contains('header--mobile-open')) {
      header.classList.remove('header--mobile-open');
    }
  });
});