let score1 = 0;
let score2 = 0;

function newDice(){
    let randomNumber = Math.floor(Math.random() * 6) +1;
    return randomNumber;
} 

function checkTwoDices(){
    let randomNumber1 = newDice();
    let randomNumber2 = newDice();

    document.getElementById('output1').innerHTML += '<p style="padding-left: 10px"> <img width="50px" src="./img/' + randomNumber1 + '.png" alt="Würfelzahl"> <br> </p>';
    document.getElementById('output2').innerHTML += '<p style="padding-left: 10px"> <img width="50px" src="./img/' + randomNumber2 + '.png" alt="Würfelzahl"> <br> </p>';

    if (randomNumber1 > randomNumber2){
        score1++;
    }
    else if (randomNumber1 < randomNumber2){
        score2++;
    }
}

function checkWinner(){
    document.getElementById('output').innerHTML += '<p>Spieler1 - Score: ' + score1 + '</p>';
    document.getElementById('output').innerHTML += '<p>Spieler2 - Score: ' + score2 + '</p>';

    if (score1 > score2){
        document.getElementById('output').innerHTML += '<p>Spieler1 hat gewonnen!</p> <hr>';
    }
    else if (score1 < score2){
        document.getElementById('output').innerHTML += '<p>Spieler2 hat gewonnen!</p> <hr>';
    }
    else{
        document.getElementById('output').innerHTML += '<p>Unentschieden</p> <hr>';
    }
}

document.getElementById('output1').innerHTML += '<p>Spieler 1: </p>';
document.getElementById('output2').innerHTML += '<p>Spieler 2: </p>';

for(let i = 0; i < 15; i++){
    checkTwoDices();
}

checkWinner();

