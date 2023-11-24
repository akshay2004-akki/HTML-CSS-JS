'use strict';

const result=document.querySelector('.text');
const digit=document.querySelectorAll('.icon');
const clear=document.querySelector('.all-clear');
const sign=document.querySelectorAll('.sign');

const num=[0,1,2,3,4,5,6,7,8,9];

digit.addEventListener('click', function(){
    if(digit.values == 7){
        result.values= 7;
    }
}) 