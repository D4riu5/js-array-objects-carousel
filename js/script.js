// arrays
const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

// selectors
const carouselDiv = document.querySelector(".carousel");
const thumbnailsContainer = document.getElementById(`thumbnails-column`);
const prevArrow = document.getElementsByClassName('.previous');
const nextArrow = document.getElementsByClassName('.next');
const showThumbnails = document.querySelector(`.show-thumbnails`);
const closeThumbnails = document.querySelector(`.close-thumbnails`);
const leftArrow = document.getElementById(`lefty`);
const rightArrow = document.getElementById(`righty`);
const upArrow = document.getElementById(`uppy`);
const downArrow = document.getElementById(`downy`);


// counters 
let selected = 0;

// cycles
for (let image of images){
  carouselDiv.innerHTML += `
  <div class="slide">
    <img src="${image.image}">
    <div id="text-container" class="w-100">
      <h4>${image.title}</h4>
      <p class="w-75">${image.text}</p>
    </div>  
  </div>
    `;
    
  thumbnailsContainer.innerHTML += `<div class="thumbnail_slide"><img class="img2" src="${image.image}"></div>`;
}


const allSlides = document.querySelectorAll('.slide');
const allThumbnails = document.querySelectorAll('.thumbnail_slide');

console.log("All slides: " + allSlides);
console.log("All thumbnail slides: " +allThumbnails);

// added selected class to position 0
allSlides[selected].classList.add('selected');
allThumbnails[selected].classList.add("selected-thumbnail");


// functions (independent)

// functions (dependent)
function next(){
  if(selected == allThumbnails.length -1){
      allSlides[selected].classList.remove('selected');
      allThumbnails[selected].classList.remove('selected-thumbnail');
      selected = 0;
      allSlides[selected].classList.add('selected');
      allThumbnails[selected].classList.add('selected-thumbnail');
  } else{
  allSlides[selected].classList.remove('selected');
  allThumbnails[selected].classList.remove('selected-thumbnail');
  selected++
  allSlides[selected].classList.add('selected');
  allThumbnails[selected].classList.add('selected-thumbnail');
  }
};

function prev(){
  if(selected == 0){
      allSlides[selected].classList.remove('selected');
      allThumbnails[selected].classList.remove('selected-thumbnail');
      selected = allThumbnails.length -1;
      allSlides[selected].classList.add('selected');
      allThumbnails[selected].classList.add('selected-thumbnail');
  } else {
  allSlides[selected].classList.remove('selected');
  allThumbnails[selected].classList.remove('selected-thumbnail');
  selected--;
  allSlides[selected].classList.add('selected');
  allThumbnails[selected].classList.add('selected-thumbnail');
  }
};
// events
