const imagensPatrocinadores = [
  "imagens/patrocinador1.png",
  "imagens/patrocinador2.jpg",
];

let slideIndex = 0;
let slideInterval;

function showImage(index) {
  const slideImg = document.getElementById("slide-image");
  slideImg.style.opacity = 0;
  setTimeout(() => {
    slideImg.src = imagensPatrocinadores[index];
    slideImg.onload = () => {
      slideImg.style.opacity = 1;
    };
  }, 500);
}

function startSlideshow() {
  document.getElementById("container").style.display = "none";
  document.getElementById("start-intervalo").style.display = "none";
  document.getElementById("intervalo-container").style.display = "block";
  slideIndex = 0;
  showImage(slideIndex);
  slideInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % imagensPatrocinadores.length;
    showImage(slideIndex);
  }, 10000);
}

function stopSlideshow() {
  clearInterval(slideInterval);
  document.getElementById("intervalo-container").style.display = "none";
  document.getElementById("container").style.display = "block";
  document.getElementById("start-intervalo").style.display = "block";
}

document
  .getElementById("start-intervalo")
  .addEventListener("click", startSlideshow);
document.getElementById("voltar").addEventListener("click", stopSlideshow);
