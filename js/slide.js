const imagensPatrocinadores = Array.from(
  { length: 28 },
  (_, i) => `imagens/patrocinador${i + 1}.png`
);

let isRandomMode = true; // Control random/sequential mode
let slideIndex = 0;
let slideInterval;
let currentImages = [...imagensPatrocinadores]; // Current order of images

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showImage(index, imagens) {
  const slideImg = document.getElementById("slide-image");
  slideImg.style.opacity = 0;
  setTimeout(() => {
    slideImg.src = imagens[index];
    slideImg.onload = () => {
      slideImg.style.opacity = 1;
    };
  }, 500);
}

function startSlideshow() {
  document.getElementById("container").style.display = "none";
  document.getElementById("start-intervalo").style.display = "none";
  document.getElementById("intervalo-container").style.display = "block";

  // Update current images based on mode
  currentImages = isRandomMode
    ? embaralhar([...imagensPatrocinadores])
    : [...imagensPatrocinadores];

  slideIndex = 0;
  showImage(slideIndex, currentImages);
  slideInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % currentImages.length;
    showImage(slideIndex, currentImages);
  }, 5000);
}

function stopSlideshow() {
  clearInterval(slideInterval);
  document.getElementById("intervalo-container").style.display = "none";
  document.getElementById("container").style.display = "flex";
  document.getElementById("start-intervalo").style.display = "block";
}

// Toggle random mode function
function toggleRandomMode(event) {
  isRandomMode = event.target.checked;
  document.getElementById("mode-label").textContent = isRandomMode
    ? "Aleatório"
    : "Sequencial";
}

document
  .getElementById("start-intervalo")
  .addEventListener("click", startSlideshow);
document.getElementById("voltar").addEventListener("click", stopSlideshow);
document
  .getElementById("random-mode-switch")
  .addEventListener("change", toggleRandomMode);
