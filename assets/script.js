
let banner = document.getElementById(slides)



/*CODE DE OPENCLASSROOM*/

const img_slides = [
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

/*

étape 1 : générer une slide
récupérer dans slides le nom de l'image et la tagline
à partie du nom générer le chemin src
générer le html qui correspond à la slide

étape 2 : changer la slide et le texte

*/

// étape 1 => pour une seule image

let i = 0;

const image = document.getElementById("slides");
image.src = "./assets/images/slideshow/" + img_slides[i].image;

const tag = document.getElementById("tagline");
tag.innerHTML = img_slides[i].tagLine;

 const img_slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let i = 0;

const image = document.getElementById("slides");
const tag = document.getElementById("tagline");
const arrowLeft = document.getElementById("left")
const arrowRight = document.getElementById("right")



function updateslides () {
	image.src = "./assets/images/slideshow/" + img_slides[i].image;
	tag.innerHTML = img_slides[i].tagLine;
}

function nextSlide (){

	i++;
    if (i >= img_slides.length) {
        i = 0;
    }
    updateSlide();
}

function previousSlide() {
    i--;
    if (i < 0) {
        i = img_slides.length- 1;
    }
    updateSlide();

	updateSlide();


}
arrowLeft.addEventListener('click', previousSlide);
arrowRight.addEventListener('click', nextSlide);