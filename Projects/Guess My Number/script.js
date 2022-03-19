'use strict';

// Elements

const check_btn = document.querySelector('.check');

const guess_input = document.querySelector('.guess');

const msg = document.querySelector('.message');

const secret_number = Math.trunc(Math.random() * 20 + 1);

const number = document.querySelector('.number');

let score = document.querySelector('.score');

number.textContent = secret_number;

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
    } else if (Number(guess_input.value) > secret_number) {
      msg.textContent = 'Too High';
      score.textContent = Number(score.textContent) - 1;
    } else if (Number(guess_input.value) < secret_number) {
      msg.textContent = 'Too Low';
      score.textContent = Number(score.textContent) - 1;
    }
  }
});
