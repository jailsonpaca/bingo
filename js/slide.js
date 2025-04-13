const imagensPatrocinadores = [
  "imagens/patrocinador1.png",
  "imagens/patrocinador2.jpg",
];

let slideIndex = 0;
let slideInterval;

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
  const imagensEmbaralhadas = embaralhar([...imagensPatrocinadores]);
  slideIndex = 0;
  showImage(slideIndex, imagensEmbaralhadas);
  slideInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % imagensEmbaralhadas.length;
    showImage(slideIndex, imagensEmbaralhadas);
  }, 3000);
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
