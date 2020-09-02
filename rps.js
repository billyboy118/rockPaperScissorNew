
let comp = 0;
let player = 0;


for (let i = 1; i < 6; i++){

    let userChoice = prompt("rock paper or scissors")
    let rps = ["rock","paper","scissors"];
    let compChoice = rps[Math.floor(Math.random()*rps.length)];
    alert(compChoice);

    if (userChoice == "rock" && compChoice == "paper"){
        alert("hello1");
        comp++;
    }
    if (userChoice == "rock" && compChoice == "scissors") {
        alert("hello2");
        player++;
        
    }
    if (userChoice == "paper" && compChoice == "rock"){
        alert("hello3");
        player++;
        
    }
    if (userChoice == "paper" && compChoice == "scissors") {
        alert("hello4");
        comp++;
    }
    if (userChoice == "scissors" && compChoice == "paper"){
        alert("hello5");
        player++;
        
    } 
    if (userChoice == "scissors" && compChoice == "rock"){
        alert("hello6");
        comp++;
    }
    if (userChoice == compChoice) alert("draw"); 

 
}

alert(parseInt(player) + " player");
alert(parseInt(comp) + " comp" );  