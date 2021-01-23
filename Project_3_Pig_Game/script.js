'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Set Scrores to 0 and  Hide dice image at initial phase
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
btnRoll.addEventListener('click', function () {
  // Generating Random Dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //Check the rolled is 1 or not,
  if (dice !== 1) {
    //   Add dice to current Score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // switch player
  }
});
