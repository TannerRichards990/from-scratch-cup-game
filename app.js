// import functions and grab DOM elements
const buttonOne = document.getElementById('cup-one-button');
const buttonTwo = document.getElementById('cup-two-button');
const buttonThree = document.getElementById('cup-three-button');

const imgOne = document.getElementById('cup-one-img');
const imgTwo = document.getElementById('cup-two-img');
const imgThree = document.getElementById('cup-three-img');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');



// let state
let wins = 0;
let losses = 0;
let total = 0;

function resetImages() {
    imgOne.src = './assets/cup.png';
    imgTwo.src = './assets/cup.png';
    imgThree.src = './assets/cup.png';

}



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
