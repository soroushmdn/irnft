// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@      SHOW & REMOVE MENU      @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@   CHANGE HEADER BACKGROUND   @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  if (this.scrollY >= 50) {
    header.classList.add('header-background');
  } else {
    header.classList.remove('header-background');
  }
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@        COUNTDOWN TIMER       @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Set the date we're counting down to
let countDownDate = new Date('Jan 1, 2023 00:00:00').getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById('timer').innerHTML =
    '<h3>' +
    days +
    '</h3><h3>' +
    hours +
    '</h3><h3>' +
    minutes +
    '</h3><h3>' +
    seconds +
    '</h3>';

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@   scrollrevealjs.org   @@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 2500,
});

sr.reveal(`.home__images`);
sr.reveal(`.home__stat`, { origin: 'left', delay: 1500, interval: 200 });
sr.reveal(`.home__title`, { delay: 500 });
sr.reveal(`.home__description`, { delay: 700 });
sr.reveal(`.home__btn`, { delay: 900 });
sr.reveal(`.home__group`, { delay: 1000, interval: 200 });
