const images = [
  "https://images.pexels.com/photos/663487/pexels-photo-663487.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1245066/pexels-photo-1245066.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2350366/pexels-photo-2350366.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3672776/pexels-photo-3672776.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2042161/pexels-photo-2042161.jpeg?auto=compress&cs=tinysrgb&w=600"
];

let currentIndex = 0;
const imgElement = document.querySelector(".img-display img");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const dotsContainer = document.querySelector(".dots");

let dots = [];

function createDots() {
  images.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === currentIndex) dot.classList.add("active");
    dot.addEventListener("click", () => updateImage(index));
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });
}

function updateImage(index) {
  imgElement.classList.add("fade-out");
  setTimeout(() => {
    imgElement.src = images[index];
    imgElement.classList.remove("fade-out");
    imgElement.classList.add("fade-in");
    setTimeout(() => imgElement.classList.remove("fade-in"), 500);
  }, 300);

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
  currentIndex = index;
}

leftBtn.addEventListener("click", () => {
  const newIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage(newIndex);
});

rightBtn.addEventListener("click", () => {
  const newIndex = (currentIndex + 1) % images.length;
  updateImage(newIndex);
});

window.addEventListener("DOMContentLoaded", () => {
  createDots();
  updateImage(currentIndex);
});
