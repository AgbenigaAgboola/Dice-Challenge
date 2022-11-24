var imageArray = [];
imageArray.push('./images/dice1.png', './images/dice2.png', './images/dice3.png', 'images/dice4.png', './images/dice5.png',  'images/dice6.png', )
var diceNumber1;
var diceNumber2;
// window.onload= function(){rollDice()};

function rollDice(){
    diceNumber1 =Math.floor(Math.random()*imageArray.length);
    diceNumber2 =Math.floor(Math.random()*imageArray.length);
    document.querySelector(".img1").src = imageArray[diceNumber1];
    document.querySelector(".img2").src = imageArray[diceNumber2];

    if(diceNumber1 > diceNumber2){
        document.querySelector(".container h1").textContent ="🚩Player 1 Wins";
    }else if(diceNumber2 > diceNumber1){
        document.querySelector(".container h1").textContent ="🚩Player 2 Wins";
    }else{
        document.querySelector(".container h1").textContent ="Draw, Roll Dice Again!";
    }
};
window.onload= function(){rollDice()};