// pages/screens
const splashPage = document.getElementById('splash-page');
const countdownPage = document.getElementById('countdown-page');
const gamePage = document.getElementById('game-page');
const scorePage = document.getElementById('score-page');

// splash page 
const startForm = document.getElementById('start-form');
const radioContainers = document.querySelectorAll('.radio-container');
const radioInputs = document.querySelectorAll('input');
const bestScores = document.querySelectorAll('.best-score-value');

// countdown page
const countdown = document.querySelector('.countdown');

// game page
const itemContainer = document.querySelector('.item-container');

// score page
const finalTime = document.querySelector('.final-time');
const baseTime = document.querySelector('.base-tiem');
const penaltyTime = document.querySelector('.penalty-time');

// variables
let questionAmount = 0;

// getting the value from selected radio button
function getRadioValue() {
  let radioValue;
  radioInputs.forEach((radioInput) => {
    if (radioInput.checked) {
      radioValue = radioInput.value;
    }
  });
  return radioValue;
};

// 
function selectQuestionAmount(e) {
  e.preventDefault();
  questionAmount = getRadioValue();
}

// event listener 
startForm.addEventListener('click', () => {
  radioContainers.forEach((radioElement) => {

    // remove selected label
    radioElement.classList.remove('selected-label');

    // add selected label
    if (radioElement.children[1].checked) {
      radioElement.classList.add('selected-label');
    }
  });
})

// event listeners
startForm.addEventListener("click", selectQuestionAmount);