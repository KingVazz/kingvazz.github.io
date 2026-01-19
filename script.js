const slides = document.querySelectorAll(".slide");

const images = [
  "images/kenangan1.jpg",
  "images/kenangan2.jpg",
  "images/kenangan3.jpg",
  "images/kenangan4.jpg",
];

slides.forEach((slide, i) => {
  slide.style.backgroundImage = `url('${images[i]}')`;
});

let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 6000);

// Surprise button
const btn = document.getElementById("surpriseBtn");
const box = document.getElementById("surpriseBox");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
  box.classList.toggle("hidden");
  music.play();
});
