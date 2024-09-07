const contentkuliner = document.querySelector(".contentkuliner");

let isDragStart = false,
  startPageX,
  startScrollLeft;

const dragStart = (e) => {
  isDragStart = true;
  startPageX = e.pageX;
  startScrollLeft = contentkuliner.scrollLeft;
  e.preventDefault();
};

const dragging = (e) => {
  if (!isDragStart) return;
  let positionDiff = e.pageX - startPageX;
  contentkuliner.scrollLeft = startScrollLeft - positionDiff;
};

const dragStop = (e) => {
  isDragStart = false;
};

contentkuliner.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
document.addEventListener("mouseleave", dragStop);

var slideIndex = 0;
var slideInterval;

function plusSlides(n) {
  clearInterval(slideInterval);
  showSlides((slideIndex += n));
  startAutoSlide();
}

function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides((slideIndex = n - 1));
  startAutoSlide();
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("fade");
  }
  slides[slideIndex].style.display = "block";
  slides[slideIndex].classList.add("fade");
}

function startAutoSlide() {
  slideInterval = setInterval(function () {
    showSlides((slideIndex += 1));
  }, 6000);
}

showSlides(slideIndex);
startAutoSlide();

function animateNumber(id, start, end, duration) {
  let element = document.getElementById(id);
  let range = end - start;
  let stepTime = Math.abs(Math.floor(duration / range));
  let startTime = new Date().getTime();
  let endTime = startTime + duration;
  let timer;

  function run() {
    let now = new Date().getTime();
    let remaining = Math.max((endTime - now) / duration, 0);
    let value = Math.round(end - remaining * range);
    element.innerHTML = value;
    if (value === end) {
      clearInterval(timer);
    }
  }

  timer = setInterval(run, stepTime);
  run();
}

animateNumber("number1", 0, 26, 5000);
animateNumber("number2", 0, 32, 5000);
animateNumber("number3", 0, 17, 5000);
animateNumber("number4", 0, 14, 5000);
animateNumber("number5", 0, 14, 5000);

type =
  "text/javascript" >
  window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });
window.addEventListener("scroll", function () {
  var links = document.querySelectorAll(".nav-links ul li a");
  if (window.scrollY > 50) {
    links.forEach(function (link) {
      link.classList.add("scrolled");
    });
  } else {
    links.forEach(function (link) {
      link.classList.remove("scrolled");
    });
  }
});

window.addEventListener("scroll", function () {
  var nav = document.querySelector(".dropdown");
  nav.classList.toggle("sticky", window.scrollY > 0);
});
window.addEventListener("scroll", function () {
  var links = document.querySelectorAll("nav ul li a");
  if (window.scrollY > 50) {
    links.forEach(function (link) {
      link.classList.add("scrolled");
    });
  } else {
    links.forEach(function (link) {
      link.classList.remove("scrolled");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("toggle");
  });
});
