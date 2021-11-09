document.getElementById('output');

function newDice(){
    let randomNumber = Math.floor(Math.random() * 6) +1;
    return randomNumber;
}

function checkTwoDices(){
    let randomNumber1 = newDice();
    let randomNumber2 = newDice();

    document.getElementById('player1').innerHTML = 'Spieler 1: ' + randomNumber1;
    document.getElementById('player2').innerHTML = 'Spieler 2: ' + randomNumber2;

    if (randomNumber1 > randomNumber2){
        document.getElementById('player').innerHTML = 'Spieler 1 hat gewonnen!';
    }
    else if (randomNumber1 < randomNumber2){
        document.getElementById('player').innerHTML = 'Spieler 2 hat gewonnen!';
    }
    else{
        document.getElementById('player').innerHTML = 'Unentschieden!';
    }
}

checkTwoDices();
