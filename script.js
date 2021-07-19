'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnNew.addEventListener('click', e => {
    btnRoll.disabled = false
    btnHold.disabled = false
    document.getElementById(`current--0`).innerText = 0
    document.getElementById(`current--1`).innerText = 0
    score0El.textContent = 0;
    score1El.textContent = 0;   
    currentScore = 0
    activePlayer = 0
    scores[0] = 0
    scores[1] = 0
    document.querySelector(`.player--0`).classList.
         remove('player--winner')
    document.querySelector(`.player--1`).classList.
         remove('player--winner')
     player0El.classList.add('player--active')
     player1El.classList.remove('player--active')
})

const switchPlayer = () => {
     document.getElementById(`current--${activePlayer}`).textContent = 0;
     activePlayer = activePlayer === 0 ? 1 : 0
     currentScore = 0
     player0El.classList.toggle('player--active')
     player1El.classList.toggle('player--active')
    
} 

btnRoll.addEventListener('click', e => {
    // Generate random dice roll

    let randRoll = Math.floor(Math.random() * 6 + 1)

    // Display dice

    diceEl.classList.remove('hidden')
    diceEl.setAttribute('src', `dice-${randRoll}.png`)

    // Check for rolled 1: if true, change players

    if (randRoll !== 1) {
        currentScore += randRoll
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer()
            
    }

})

btnHold.addEventListener('click', e => {
     scores[activePlayer] += currentScore
     document.getElementById(`score--${activePlayer}`)
        .innerText = scores[activePlayer]

    if (scores[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.
         add('player--winner')
           document.querySelector(`.player--${activePlayer}`).classList.
         remove('player--active')
         diceEl.classList.add('hidden')
         btnRoll.disabled = true
         btnHold.disabled = true
         document.getElementById(`current--${activePlayer}`)
        .innerText = 0

    } else {
         switchPlayer()
    }

  
   
     
})