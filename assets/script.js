const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const dots = document.querySelector(".dots"); // Permet d'appeler un élément du DOM ("spécifier le selecteur CSS")
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const p = document.querySelector("#banner p");
let dotsIndex = 0;

const displayDots = () => {
  dots.innerHTML = ""; // Vide au cas où il y a des éléments
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement("div");
    div.classList.add("dot");
    dots.appendChild(div);
    if (i === dotsIndex) {
      div.classList.add("dot_selected");
    }
  }
};

displayDots();
const tabDots = document.querySelectorAll(".dots .dot");
const handleRightClick = () => {
  if (tabDots.length > 0) {
    tabDots[dotsIndex].classList.remove("dot_selected");
    dotsIndex++;
    if (dotsIndex >= slides.length) {
      dotsIndex = 0;
    }
    tabDots[dotsIndex].classList.add("dot_selected");
    bannerImg.src = "./assets/images/slideshow/" + slides[dotsIndex].image;
    p.innerHTML = slides[dotsIndex].tagLine;
  }
};

arrow_right.addEventListener("click", handleRightClick);

const handleLeftClick = () => {
  if (tabDots.length > 0) {
    tabDots[dotsIndex].classList.remove("dot_selected");
    dotsIndex--;
    if (dotsIndex < 0) {
      dotsIndex = slides.length - 1;
    }
    tabDots[dotsIndex].classList.add("dot_selected");
    bannerImg.src = "./assets/images/slideshow/" + slides[dotsIndex].image;
    p.innerHTML = slides[dotsIndex].tagLine;
  }
};

arrow_left.addEventListener("click", handleLeftClick);
