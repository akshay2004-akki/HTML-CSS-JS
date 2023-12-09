function getRandomUniqueNumber(min, max, usedNumbers) {
    let num;
    do {
      num = Math.trunc(Math.random() * (max - min + 1)) + min;
    } while (usedNumbers.includes(num));
    usedNumbers.push(num);
    return num;
  }

  // Get all buttons with the class "box"
  const boxes = document.querySelectorAll('.box');
  const reset=document.querySelector(".reset");
  const h1=document.querySelector("h1");
  const h2=document.querySelector("h2")

  // Array to keep track of used numbers
  let usedNumbers = [];

  // Assign random unique numbers to each box
  reset.addEventListener('click', ()=>{
    boxes.forEach((box)=>{
        const randomNumber = getRandomUniqueNumber(1, 25, usedNumbers);
        box.innerText = randomNumber;
        box.disabled=false;
        h2.innerText='____';
        h1.innerText='Letters will appear here';
    })
    usedNumbers=[];
    checkWinner();
  })

  const declareWinner = ()=>{
    h2.innerText='Winner';
    boxes.forEach((box)=>{
      box.disabled=true;
    })
  }
  const bingo=['B','I','N','G','O'];
  const checkWinner = () => {
    // let winnerCount = 0;
      var i=0;
      for (let pattern of winner) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        let val4 = boxes[pattern[3]].innerText;
        let val5 = boxes[pattern[4]].innerText;
  
        if (val1 === val2 && val2 === val3 && val3 === val4 && val4 === val5) {
          h1.innerText=`${bingo[i++]}`;
          if(h1.innerText==='O'){
            declareWinner();
            break;
          }
        }
    }
  };
  

const winner=[
    [0,1,2,3,4],
    [5,6,7,8,9],
    [10,11,12,13,14],
    [15,16,17,18,19],
    [20,21,22,23,24],
    [0,5,10,15,20],
    [1,6,11,16,21],
    [2,7,12,17,22],
    [3,8,13,18,23],
    [4,9,14,19,24],
    [0,6,12,18,24],
    [4,8,12,16,20]
];
boxes.forEach((boxx)=>{
  boxx.addEventListener('click', ()=>{
    boxx.innerText='X';
    checkWinner();
  })
})