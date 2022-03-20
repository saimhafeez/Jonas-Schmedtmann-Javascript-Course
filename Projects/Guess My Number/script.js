'use strict';

const getrandom = () => Math.trunc(Math.random() * 20 + 1);

// Elements

const check_btn = document.querySelector('.check');

const guess_input = document.querySelector('.guess');

const msg = document.querySelector('.message');

let secret_number = getrandom();

const number = document.querySelector('.number');

const highscore = document.querySelector('.highscore');

let score = document.querySelector('.score');

console.log(msg, score);

check_btn.addEventListener('click', function () {
  // Empty Input
  if (!guess_input.value) {
    alert('Input a number');
  } else if (score.textContent < 1) {
    msg.textContent = 'You Lost!';
  } else {
    if (Number(guess_input.value) === secret_number) {
      msg.textContent = 'You Guessed it Right!';

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      check_btn.disabled = true;
      number.textContent = secret_number;

      if (Number(score.textContent) > Number(highscore.textContent)) {
        highscore.textContent = score.textContent;
      }
    } else if (Number(guess_input.value) > secret_number) {
      msg.textContent = 'Too High';
      score.textContent = Number(score.textContent) - 1;
    } else if (Number(guess_input.value) < secret_number) {
      msg.textContent = 'Too Low';
      score.textContent = Number(score.textContent) - 1;
    }
    if (score.textContent < 1) {
      msg.textContent = 'You Lost!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score.textContent = 20;
  secret_number = getrandom();
  number.textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  check_btn.disabled = false;
});
