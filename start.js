const text = document.querySelector(".a-text");
const block = document.querySelector(".ani");

const animationDelay = localStorage.getItem("animation-delay");

let time = Date.now();

if (!animationDelay) {
  block.style.display = "flex";
  localStorage.setItem("animation-delay", time + 300000);
} else if (time > animationDelay) {
  localStorage.setItem("animation-delay", time + 300000);
  block.style.display = "flex";
} else if (time < animationDelay) {
  block.style.display = "none";
}
