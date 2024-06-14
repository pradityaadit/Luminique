let slideIndex = 0;
const slides = document.getElementsByClassName("card-content");

function showSlide(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

showSlide(slideIndex);

document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animated");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.6;

    animatedElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        element.classList.add("fadeInLeft");
      } else {
        element.classList.remove("fadeInLeft");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navbar = document.querySelector(".navbar");

  hamburgerMenu.addEventListener("click", function () {
    navbar.classList.toggle("expanded");
  });
});
