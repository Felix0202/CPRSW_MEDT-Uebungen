let score1 = 0;
let score2 = 0;

let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');
let output = document.getElementById('output');

function newDice(){
    let randomNumber = Math.floor(Math.random() * 6) +1;
    return randomNumber;
} 

function checkTwoDices(){
    let randomNumber1 = newDice();
    let randomNumber2 = newDice();

    if (randomNumber1 > randomNumber2){
        score1++;
        output1.innerHTML += '<p id="winner_img"> <img src="./img/' + randomNumber1 + '.png" alt="Würfelzahl"> <br> </p>';
        output2.innerHTML += '<p id="loser_img"> <img src="./img/' + randomNumber2 + '.png" alt="Würfelzahl"> <br> </p>';
    }
    else if (randomNumber1 < randomNumber2){
        score2++;
        output1.innerHTML += '<p id="loser_img"> <img src="./img/' + randomNumber1 + '.png" alt="Würfelzahl"> <br> </p>';
        output2.innerHTML += '<p id="winner_img"> <img src="./img/' + randomNumber2 + '.png" alt="Würfelzahl"> <br> </p>';
    }
    else{
        output1.innerHTML += '<p id="loser_img"> <img src="./img/' + randomNumber1 + '.png" alt="Würfelzahl"> <br> </p>';
        output2.innerHTML += '<p id="loser_img"> <img src="./img/' + randomNumber2 + '.png" alt="Würfelzahl"> <br> </p>';
    }
}

function checkWinner(){
    if (score1 > score2){
        output.innerHTML += '<p id="winner">Spieler1 - Score: ' + score1 + '</p>';
        output.innerHTML += '<p id="loser">Spieler2 - Score: ' + score2 + '</p>';
        output.innerHTML += '<p id="winner">Spieler1 hat gewonnen!</p> <hr>';
    }
    else if (score1 < score2){
        output.innerHTML += '<p id="loser">Spieler1 - Score: ' + score1 + '</p>';
        output.innerHTML += '<p id="winner">Spieler2 - Score: ' + score2 + '</p>';
        output.innerHTML += '<p id="winner">Spieler2 hat gewonnen!</p> <hr>';
    }
    else{
        output.innerHTML += '<p>Spieler1 - Score: ' + score1 + '</p>';
        output.innerHTML += '<p>Spieler2 - Score: ' + score2 + '</p>';
        output.innerHTML += '<p>Unentschieden</p> <hr>';
    }
}

output1.innerHTML += '<p>Spieler 1: </p>';
output2.innerHTML += '<p>Spieler 2: </p>';

for(let i = 0; i < 15; i++){
    checkTwoDices();
}

checkWinner();

