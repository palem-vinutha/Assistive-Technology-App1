const tech = [
  "Screen Reader",
  "Speech Recognition",
  "Text-to-Speech",
  "Keyboard Navigation",
  "Color Contrast",
  "Magnifier",
  "Closed Captions",
  "Sign Language Support",
  "Eye Tracking",
  "Voice Commands"
];

const container = document.getElementById("tech-list");
tech.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerText = item;
  container.appendChild(card);
});

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}