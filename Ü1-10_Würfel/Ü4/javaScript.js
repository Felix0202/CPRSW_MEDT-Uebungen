document.getElementById('output');

function newDice(){
    let randomNumber = Math.floor(Math.random() * 6) +1;
    return randomNumber;
}

function newDoubleDice(){
    return newDice() + newDice();
}

for (let i = 0; i < 15; i++){
    output.innerHTML += (i+1) + '.Number:  ' + newDoubleDice() + '<br>'; 
}
