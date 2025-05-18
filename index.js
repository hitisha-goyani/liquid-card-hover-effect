window.addEventListener("load", () => {
  document.getElementById("loader").classList.add("hidden");
});

const bubbles = document.querySelector(".bubbles");
for (let i = 0; i < 30; i++) {
  const span = document.createElement("span");
  const size = Math.random() * 30 + 10;
  span.style.left = `${Math.random() * 100}%`;
  span.style.width = `${size}px`;
  span.style.height = `${size}px`;
  span.style.animationDuration = `${10 + Math.random() * 10}s`;
  span.style.animationDelay = `${Math.random() * 5}s`;
  bubbles.appendChild(span);
}

let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    let rect = card.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;
    let ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${mouseX}px`;
    ripple.style.top = `${mouseY}px`;
    card.appendChild(ripple);
    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  });
});
