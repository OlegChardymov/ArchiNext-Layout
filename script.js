const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__link");

const navSlide = () => {
  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("nav__links--active");
    burgerMenu.classList.toggle("burger-menu--active");
    burgerMenu.classList.toggle("toggle");
  });
};

const navClose = () => {
  links.forEach(function(link) {
    link.addEventListener("click", () => {
      nav.classList.remove("nav__links--active");
      burgerMenu.classList.remove("burger-menu--active");
      burgerMenu.classList.remove("toggle");
    });
  });
};

const navAnimation = () => {
  navSlide();
  navClose();
};

navAnimation();
