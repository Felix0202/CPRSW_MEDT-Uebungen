function newDice(){
    let randomNumber = Math.floor(Math.random() * 6) +1;
    return randomNumber;
} 

function checkTwoDices(){
    let randomNumber1 = newDice();
    let randomNumber2 = newDice();

    document.getElementById('output').innerHTML += '<p>Spieler 1: <img width="50px" src="./img/' + randomNumber1 + '.png" alt="Würfelzahl"> <br> </p>';;
    document.getElementById('output').innerHTML += '<p>Spieler 2: <img width="50px" src="./img/' + randomNumber2 + '.png" alt="Würfelzahl"> <br> </p>';;

    if (randomNumber1 > randomNumber2){
        document.getElementById('output').innerHTML += 'Spieler 1 hat gewonnen! <hr>';
    }
    else if (randomNumber1 < randomNumber2){
        document.getElementById('output').innerHTML += 'Spieler 2 hat gewonnen! <hr>';
    }
    else{
        document.getElementById('output').innerHTML += 'Unentschieden! <hr>';
    }
}

for(let i = 0; i < 15; i++){
    checkTwoDices();
}
