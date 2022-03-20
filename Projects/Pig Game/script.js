'use strict';

// CLASS ELEMENTS
const dice = document.querySelector('.dice');

const roll_btn = document.querySelector('.btn--roll');

const hold_btn = document.querySelector('.btn--hold');

const new_btn = document.querySelector('.btn--new');

const player_one = document.querySelector('.player--0');

const player_two = document.querySelector('.player--1');

const player_one_score = document.querySelector('#current--0');

const player_two_score = document.querySelector('#current--1');

const player_one_total_score = document.querySelector('#score--0');

const player_two_total_score = document.querySelector('#score--1');

let current_player = 1;

// Functions
const generateRandomDice = () => Math.trunc(Math.random() * 6 + 1);

const switch_player = function () {
  if (current_player === 1) {
    current_player = 2;
    player_one.classList.remove('player--active');
    player_two.classList.add('player--active');
  } else {
    current_player = 1;
    player_one.classList.add('player--active');
    player_two.classList.remove('player--active');
  }
};

const reset_current_score = function () {
  if (current_player === 1) {
    player_one_score.textContent = 0;
  } else {
    player_two_score.textContent = 0;
  }
};

const setDice = function () {
  const diceNo = generateRandomDice();
  const source = `dice-${diceNo}.png`;
  dice.src = source;

  if (diceNo != 1) {
    if (current_player === 1) {
      player_one_score.textContent =
        Number(player_one_score.textContent) + diceNo;
    } else {
      player_two_score.textContent =
        Number(player_two_score.textContent) + diceNo;
    }
  } else {
    reset_current_score();
    switch_player();
  }
};

const new_game = function () {
  player_one_score.textContent = 0;
  player_two_score.textContent = 0;
  player_one_total_score.textContent = 0;
  player_two_total_score.textContent = 0;
};

const win_checker = function () {
  if (Number(player_one_total_score.textContent) >= 100) {
    alert('Player 1 Won!');
    new_game();
  } else if (Number(player_two_total_score.textContent) >= 100) {
    alert('Player 2 Won!');
    new_game();
  }
};
// Applying Action Listeners
roll_btn.addEventListener('click', setDice);

hold_btn.addEventListener('click', function () {
  if (current_player === 1) {
    player_one_total_score.textContent =
      Number(player_one_total_score.textContent) +
      Number(player_one_score.textContent);
    reset_current_score();
  } else {
    player_two_total_score.textContent =
      Number(player_two_total_score.textContent) +
      Number(player_two_score.textContent);
    reset_current_score();
  }
  switch_player();
  win_checker();
});

new_btn.addEventListener('click', () => {
  new_game();
});
