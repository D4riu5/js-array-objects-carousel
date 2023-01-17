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
    <div id="text-container" class="w-100 ps-2">
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

function show(){
  thumbnailsContainer.style.display = "block";
  showThumbnails.style.display = "none";
  closeThumbnails.style.display = "block";
  leftArrow.style.display ='none';
  rightArrow.style.display ='none';
  upArrow.style.display = 'block';
  downArrow.style.display = 'block';
};

function see(){ 
      thumbnailsContainer.style.display = "none";
      upArrow.style.display = 'none';
      downArrow.style.display = 'none';
      showThumbnails.style.display = "block";
      closeThumbnails.style.display = "none";
      leftArrow.style.display ='block';
      rightArrow.style.display ='block';
};

// events

// CLICK-ABLE THUMBNAILS
allThumbnails[0].classList.add("Spider");
allThumbnails[1].classList.add("Alien");
allThumbnails[2].classList.add("Fortnite");
allThumbnails[3].classList.add("Stray");
allThumbnails[4].classList.add("Avengers");

const SpiderElement = document.querySelector('.Spider');
const AlienElement = document.querySelector('.Alien');
const FortniteElement = document.querySelector('.Fortnite');
const StrayElement = document.querySelector('.Stray');
const AvengersElement = document.querySelector('.Avengers');

SpiderElement.addEventListener(`click`,
    function goTospider() {
        for (let x = 0; x < images.length; x++) {
            allSlides[selected].classList.remove('selected');
            allThumbnails[selected].classList.remove('selected-thumbnail');
            selected = 0;
            allSlides[selected].classList.add('selected');
            allThumbnails[selected].classList.add('selected-thumbnail');
        }
    }
);

AlienElement.addEventListener(`click`,
    function goToAlien() {

        for (let x = 0; x < images.length; x++) {
            if (selected == 0) {
                allSlides[selected].classList.remove('selected');
                allThumbnails[selected].classList.remove('selected-thumbnail');
                selected = selected + 1;
                allSlides[selected].classList.add('selected');
                allThumbnails[selected].classList.add('selected-thumbnail');
            } else if (selected == 1) {
                allSlides[selected].classList.remove('selected');
                allThumbnails[selected].classList.remove('selected-thumbnail');
                selected = 1;
                allSlides[selected].classList.add('selected');
                allThumbnails[selected].classList.add('selected-thumbnail');
                break;
            } else {
                allSlides[selected].classList.remove('selected');
                allThumbnails[selected].classList.remove('selected-thumbnail');
                selected = 0;
                allSlides[selected].classList.add('selected');
                allThumbnails[selected].classList.add('selected-thumbnail');
            }
        }
    }
);

FortniteElement.addEventListener(`click`,
    function goToFortnite() {
        for (let x = 0; x < images.length; x++) {
            if (selected == 0) {
                allSlides[selected].classList.remove('selected');
                allThumbnails[selected].classList.remove('selected-thumbnail');
                selected = selected + 2;
                allSlides[selected].classList.add('selected');
                allThumbnails[selected].classList.add('selected-thumbnail');
            } else if (selected == 2) {
                allSlides[selected].classList.remove('selected');
                allThumbnails[selected].classList.remove('selected-thumbnail');
                selected = 2;
                allSlides[selected].classList.add('selected');
                allThumbnails[selected].classList.add('selected-thumbnail');
                console.log("x is " + x + " selected is " + selected + " STOP")
                break;
            } else {
                allSlides[selected].classList.remove('selected');
                allThumbnails[selected].classList.remove('selected-thumbnail');
                selected = 0;
                allSlides[selected].classList.add('selected');
                allThumbnails[selected].classList.add('selected-thumbnail');
            }
        }
    }
);

StrayElement.addEventListener(`click`,
    function goToStray() {
        for (let x = 0; x < images.length; x++) {
            if (selected == 0) {
                allSlides[selected].classList.remove('selected');
                allThumbnails[selected].classList.remove('selected-thumbnail');
                selected = selected + 3;
                allSlides[selected].classList.add('selected');
                allThumbnails[selected].classList.add('selected-thumbnail');
            } else if (selected == 3) {
                allSlides[selected].classList.remove('selected');
                allThumbnails[selected].classList.remove('selected-thumbnail');
                selected = 3;
                allSlides[selected].classList.add('selected');
                allThumbnails[selected].classList.add('selected-thumbnail');
                break;
            } else {
                allSlides[selected].classList.remove('selected');
                allThumbnails[selected].classList.remove('selected-thumbnail');
                selected = 0;
                allSlides[selected].classList.add('selected');
                allThumbnails[selected].classList.add('selected-thumbnail');
            }
        }
    }
);

AvengersElement.addEventListener(`click`,
    function goToAvengers() {
        for (let x = 0; x < images.length; x++) {
            if (selected == 0) {
                allSlides[selected].classList.remove('selected');
                allThumbnails[selected].classList.remove('selected-thumbnail');
                selected = selected + 4;
                allSlides[selected].classList.add('selected');
                allThumbnails[selected].classList.add('selected-thumbnail');
            } else if (selected == 4) {
                allSlides[selected].classList.remove('selected');
                allThumbnails[selected].classList.remove('selected-thumbnail');
                selected = 4;
                allSlides[selected].classList.add('selected');
                allThumbnails[selected].classList.add('selected-thumbnail');
                break;
            } else {
                allSlides[selected].classList.remove('selected');
                allThumbnails[selected].classList.remove('selected-thumbnail');
                selected = 0;
                allSlides[selected].classList.add('selected');
                allThumbnails[selected].classList.add('selected-thumbnail');
            }
        }
    }
);



// Timer stuff

