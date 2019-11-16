const navSlide = () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav__links");

  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("nav__links--active");
    burgerMenu.classList.toggle("burger-menu--active");
    burgerMenu.classList.toggle("toggle");
  });
};

navSlide();
