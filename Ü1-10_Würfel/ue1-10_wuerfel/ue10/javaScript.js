let score1 = 0;
let score2 = 0;
let passes = 5;
let randomNumber1 = 0;
let randomNumber2 = 0;
let player1_results = new Array(passes);
let player2_results = new Array(passes);
let player1_available = true;
let player2_available = true;

let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');
let output = document.getElementById('output');

function newDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

function checkWinner() {
    for (let i = 0; i < passes; i++) {
        if (player1_results[i] > player2_results[i]) {
            score1++;
        }
        else if (player2_results[i] > player1_results[i]) {
            score2++;
        }
    }

    if (score1 > score2) {
        output.innerHTML += '<p id="winner">Spieler1 - Score: ' + score1 + '</p>';
        output.innerHTML += '<p id="loser">Spieler2 - Score: ' + score2 + '</p>';
        output.innerHTML += '<p id="winner">Spieler1 hat gewonnen!</p> <hr>';
    }
    else if (score1 < score2) {
        output.innerHTML += '<p id="loser">Spieler1 - Score: ' + score1 + '</p>';
        output.innerHTML += '<p id="winner">Spieler2 - Score: ' + score2 + '</p>';
        output.innerHTML += '<p id="winner">Spieler2 hat gewonnen!</p> <hr>';
    }
    else {
        output.innerHTML += '<p>Spieler1 - Score: ' + score1 + '</p>';
        output.innerHTML += '<p>Spieler2 - Score: ' + score2 + '</p>';
        output.innerHTML += '<p>Unentschieden</p> <hr>';
    }
}

function newDicePlayer1() {
    if (player1_available) {
        output1.innerHTML = '<p>Spieler 1: </p>';
        document.getElementById('button_1').style.opacity = '0.2';
        for (let i = 0; i < passes; i++) {
            randomNumber1 = newDice();
            player1_results[i] = randomNumber1;
            output1.innerHTML += '<p> <img src="./img/' + randomNumber1 + '.png" alt="Würfelzahl"> <br> </p>';
        }
        output.innerHTML = '';
        checkWinner();
        player1_available = false;
    }
}

function newDicePlayer2() {
    if (player2_available) {
        output2.innerHTML = '<p>Spieler 2: </p>';
        document.getElementById('button_2').style.opacity = '0.2';
        for (let i = 0; i < passes; i++) {
            randomNumber2 = newDice();
            player2_results[i] = randomNumber2;
            output2.innerHTML += '<p> <img src="./img/' + randomNumber2 + '.png" alt="Würfelzahl"> <br> </p>';
        }
        output.innerHTML = '';
        checkWinner();
        player2_available = false;
    }
}

function startGame() {
    output1.innerHTML = '<p>Spieler 1: </p>';
    output2.innerHTML = '<p>Spieler 2: </p>';
    document.getElementById('button_1').style.opacity = '1';
    document.getElementById('button_2').style.opacity = '1';
    player1_results = new Array(passes);
    player2_results = new Array(passes);
    player1_available = true;
    player2_available = true;
}

output1.innerHTML = '<p>Spieler 1: </p>';
output2.innerHTML = '<p>Spieler 2: </p>';
checkWinner();