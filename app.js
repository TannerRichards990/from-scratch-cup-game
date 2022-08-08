// import functions and grab DOM elements
const buttonOne = document.getElementById('cup-one-button');
const buttonTwo = document.getElementById('cup-two-button');
const buttonThree = document.getElementById('cup-three-button');
const resetButton = document.getElementById('reset-button');

const cupImgOne = document.getElementById('cup-one-img');
const cupImgTwo = document.getElementById('cup-two-img');
const cupImgThree = document.getElementById('cup-three-img');


const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');




// let state



let wins = 0;
let losses = 0;
let totalGuesses = 0;

const hidingImages = ['cupImgOne', 'cupImgTwo', 'cupImgThree'];







// set event listeners 

buttonOne.addEventListener('click', () => {
    const hidingCup = getRandomItem(hidingImages);
    handleGuess(hidingCup, 'cupImgOne');
});

buttonTwo.addEventListener('click', () => {
    const hidingCup = getRandomItem(hidingImages);
    handleGuess(hidingCup, 'cupImgTwo');
});

buttonThree.addEventListener('click', () => {
    const hidingCup = getRandomItem(hidingImages);
    handleGuess(hidingCup, 'cupImgThree');
});

resetButton.addEventListener('click', () => {
    cupImgOne.src = './assets/solo-cup.png';
    cupImgTwo.src = './assets/solo-cup.png';
    cupImgThree.src = './assets/solo-cup.png';

    buttonOne.disabled = false;
    buttonTwo.disabled = false;
    buttonThree.disabled = false;
    wins = 0;
    losses = 0;
    totalGuesses = 0;
    winsEl.textContent = 0;
    lossesEl.textContent = 0;
    totalEl.textContent = 0;
});

function clearCheck() {
    cupImgOne.src = './assets/solo-cup.png';
    cupImgTwo.src = './assets/solo-cup.png';
    cupImgThree.src = './assets/solo-cup.png';
}


function handleGuess(userGuess, correctSpot) {
    clearCheck();
    totalGuesses++;
    totalEl.textContent = totalGuesses;

    if (userGuess === 'cupImgOne') {
        cupImgOne.src = './assets/correct-cup.png';
    } else if (userGuess === 'cupImgTwo') {
        cupImgTwo.src = './assets/correct-cup.png';
    } else if (userGuess === 'cupImgThree') {
        cupImgThree.src = './assets/correct-cup.png';
  
    }

    if (correctSpot === userGuess) {
        wins++;
        winsEl.textContent = wins;
    }
    else {
        losses++;
        lossesEl.textContent = losses;
    }
}





function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    return randomItem;
}










  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
