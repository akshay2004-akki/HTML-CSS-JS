'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');

const roll=document.querySelector('.btn--roll');
const hold=document.querySelector('.btn--hold');
const btnNew=document.querySelector('.btn--new');

const currscr0=document.querySelector('#current--0');
const currscr1=document.querySelector('#current--1');

const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');

let scores, currscore, activePlayer, playing;

const init = function(){

    scores=[0, 0];
    currscore=0;
    activePlayer=0;
    playing=true;

    score0.textContent=0;
    score1.textContent=0;
    currscr0.textContent=0;
    currscr1.textContent=0;
    
    dice.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
};

init();



const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer = activePlayer === 0 ? 1:0;
    currscore=0;
    player0.classList.toggle('player--active');         //Add the class if it is bnot there or if the class is present then it will remove it
    player1.classList.toggle('player--active');
}

roll.addEventListener('click', function(){
    if(playing){
        const num=Math.trunc(Math.random()*6)+1;

        dice.classList.remove('hidden');
        dice.src = `dice-${num}.png`;          //modify the source of the image file !!

        if(num!=1){
            currscore=currscore+num;
            document.getElementById(`current--${activePlayer}`).textContent=currscore;
        }
        else{
            switchPlayer();
        }
    }
})

hold.addEventListener('click', function(){
    if(playing){
        scores[activePlayer]+=currscore;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
        switchPlayer();

        if(scores[activePlayer]>=30){
            playing=false;
            dice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
    }
})

btnNew.addEventListener('click', init);

