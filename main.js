const hamburger = document.querySelector('.hamburger');
const firstLine = document.querySelector('.span-1');
const secondLine = document.querySelector('.span-2');
const thirdLine = document.querySelector('.span-3');
const links = document.querySelector('.links');
const currentYear = new Date().getFullYear();
const year = document.querySelector('#year');

year.innerHTML = currentYear;
let clicked = false;

// hamburger-menu
hamburger.addEventListener('click', () => {
  if (!clicked) {
    firstLine.classList.add('-rotate-45');
    secondLine.classList.add('hidden');
    thirdLine.classList.add('rotate-45');
    links.classList.remove('invisible');
    clicked = true;
  } else if (clicked) {
    firstLine.classList.remove('-rotate-45');
    secondLine.classList.remove('hidden');
    thirdLine.classList.remove('rotate-45');
    links.classList.add('invisible');
    clicked = false;
  }
});

// Scroll Animation
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-wrapper');
  loader.classList.add('hidden');
});

// Animate on Scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    //  else {
    //   entry.target.classList.remove('show');
    // }
  });
});

const hiddenElements = document.querySelectorAll('.notshow');
hiddenElements.forEach((el) => observer.observe(el));
