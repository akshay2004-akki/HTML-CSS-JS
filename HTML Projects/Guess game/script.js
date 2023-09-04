const secretnum= Math.trunc(Math.random()*20)+1;

let score=20;
document.querySelector('.score').value=score;
let highscore=0;
document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.start').textContent='no number';
    }
    else if(guess > secretnum){
        if(score>1){
            document.querySelector('.start').textContent='Thinck of lesser number';
            score--;
            document.querySelector('.score2').textContent=score;
        }
        else {
            document.querySelector('.start').textContent='You lost the game'
            document.querySelector('.score2').textContent=0;
        }
    }
    else if(guess < secretnum){
        if(score>1){
            document.querySelector('.start').textContent='Thinck of higher number';
            score--;
            document.querySelector('.score2').textContent=score;
        }
        else{
            document.querySelector('.start').textContent='You lost the game'
            document.querySelector('.score2').textContent=0;
        }
    }
    else{
        document.querySelector('.start').textContent='correct number';
        document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('.num').textContent=secretnum;
        if(score>highscore){
            highscore=score;
        }
        document.querySelector('.high2').textContent=highscore;
    }
});
document.querySelector('.btn').addEventListener('click', function(){
    score=20;
    document.querySelector('.score2').textContent=score;
    document.querySelector('body').style.backgroundColor ='#111';
    document.querySelector('.start').textContent='Start Guessing.....';
    document.querySelector('.num').textContent='?';
    document.querySelector('.guess').value='null';
})