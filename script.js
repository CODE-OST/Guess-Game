'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎈';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 18;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  //no input
  if (!guess) {
    displayMessage('🚩No Number!');
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!🎈');
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = ' #60b347';
    displayWidth(' 30rem');
    displayNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High😑' : 'Too Low😑');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('GAME OVER!💥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayNumber('?');
  document.querySelector('.score').textContent = score;
  displayWidth(' 15rem');
  document.querySelector('body').style.backgroundColor = ' #222';
  displayMessage('Start guessing ...');
  document.querySelector('.guess').value = '';
});
