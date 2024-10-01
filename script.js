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

// displays countdown (3, 2, 1, GO!)
function startCountdown() {
  countdown.textContent = '3';

  setTimeout(() => {
    countdown.textContent = '2';
  }, 1000);
  setTimeout(() => {
    countdown.textContent = '1';
  }, 2000);
  setTimeout(() => {
    countdown.textContent = 'go!';
  }, 3000);
}

// navigate from splash page to countdown page
function showCountdown() {
  countdownPage.hidden = false;
  splashPage.hidden = true;
  startCountdown();
}

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

  if (questionAmount) {
    showCountdown();
  }
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
startForm.addEventListener("submit", selectQuestionAmount);