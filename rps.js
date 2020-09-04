

//let rps = ["rock","paper","scissors"];
//let compChoice = rps[Math.floor(Math.random()*rps.length)];
//alert(compChoice);


let comp = 0;
let player1 = 0;
let compRounds = 0;
let playerRounds =0;
let userChoice;
let compChoice;

const winLoss = document.querySelector("#winLoss");
winLoss.classList.remove("winLoss1");

function rockPaperScissor(userChoice, compChoice){



        if (userChoice == "rock" && compChoice == "paper"){
            //alert("Looser");
            comp++;
            winLoss.textContent = "Loser";
            winLoss.classList.add("winLoss1");
            setTimeout( function() {
                winLoss.classList.remove("winLoss1")
            } , 1500);
                 
        }
        if (userChoice == "rock" && compChoice == "scissors") {
            //alert("Winner");
            player1++;
            winLoss.textContent = "Winner";
            winLoss.classList.add("winLoss1");
            setTimeout( function() {
                winLoss.classList.remove("winLoss1")
            } , 1500);   
            
            
        }
        if (userChoice == "paper" && compChoice == "rock"){
            //alert("Winner");
            player1++;
            winLoss.textContent = "Winner";
            winLoss.classList.add("winLoss1");
            setTimeout( function() {
                winLoss.classList.remove("winLoss1")
            } , 1500);   
        }
        if (userChoice == "paper" && compChoice == "scissors") {
            //alert("Loser");
            comp++;
            winLoss.textContent = "Loser";
            winLoss.classList.add("winLoss1");
            setTimeout( function() {
                winLoss.classList.remove("winLoss1")
            } , 1500);
        }
        if (userChoice == "scissors" && compChoice == "paper"){
            //alert("Winner");
            player1++;
            winLoss.textContent = "Winner";
            winLoss.classList.add("winLoss1");
            setTimeout( function() {
                winLoss.classList.remove("winLoss1")
            } , 1500)
            
        } 
        if (userChoice == "scissors" && compChoice == "rock"){
            //alert("Loser");
            comp++;
            winLoss.textContent = "Loser";
            winLoss.classList.add("winLoss1");
            setTimeout( function() {
                winLoss.classList.remove("winLoss1")
            } , 1500);
        }
        if (userChoice == compChoice) { //alert("draw"); 
        winLoss.textContent = "Draw";
        winLoss.classList.add("winLoss1");
        setTimeout( function() {
            winLoss.classList.remove("winLoss1")
        } , 1500);
    }
    
    //}

    //alert(parseInt(player1) + " player");
    //alert(parseInt(comp) + " comp" );  

    let playerScore = document.querySelector("#playerScore");
        playerScore.textContent = player1;
    let computerScore = document.querySelector("#computerScore");
        computerScore.textContent = comp;

    if(player1 == 5){
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        player1 = 0;
        comp = 0;
        playerRounds++;
    }else if (comp == 5){
        computerScore.textContent = 0;
        playerScore.textContent = 0;
        player1 = 0;
        comp = 0;
        compRounds++;

    } else {}

    let playerGames = document.querySelector("#playerRounds");
        playerGames.textContent = playerRounds;
    let computerGames = document.querySelector("#computerRounds");
        computerGames.textContent = compRounds;


        
}       







const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");



rockbtn.addEventListener("click", function (v) {
    
    v.target; player.style.backgroundImage = 'url("black.jpg")';
    setTimeout (function () {
        v.target; player.style.backgroundImage = 'url("rock-md.png")'
    },100);
     let rps = ["rock","paper","scissors"];
     let compChoice = rps[Math.floor(Math.random()*rps.length)];
     let userChoice = "rock";



    if (compChoice == "rock"){
        computer.style.backgroundImage = 'url("black.jpg")';
        setTimeout (function () {
            v.target; computer.style.backgroundImage = 'url("rock-md.png")'
        },100);
    }else if (compChoice == "paper"){
        computer.style.backgroundImage = 'url("black.jpg")';
        setTimeout (function () {
            v.target; computer.style.backgroundImage = 'url("paper-md.png")'
        },100);
    }else if (compChoice == "scissors") {
        computer.style.backgroundImage = 'url("black.jpg")';
        setTimeout (function () {
            v.target; computer.style.backgroundImage = 'url("scissors-md.png")'
        },100);
    }else{
    }
    
    return rockPaperScissor (userChoice, compChoice);
     
});
paperbtn.addEventListener("click", function (v) {
    v.target; player.style.backgroundImage = 'url("black.jpg")';
    setTimeout (function () {
        v.target; player.style.backgroundImage = 'url("paper-md.png")'
    },100);
    let userChoice = "paper";
    let rps = ["rock","paper","scissors"];
    let compChoice = rps[Math.floor(Math.random()*rps.length)];
    
    if (compChoice == "rock"){
        computer.style.backgroundImage = 'url("black.jpg")';
        setTimeout (function () {
            v.target; computer.style.backgroundImage = 'url("rock-md.png")'
        },100);
    }else if (compChoice == "paper"){
        computer.style.backgroundImage = 'url("black.jpg")';
        setTimeout (function () {
            v.target; computer.style.backgroundImage = 'url("paper-md.png")'
        },100);
    }else if (compChoice == "scissors") {
        computer.style.backgroundImage = 'url("black.jpg")';
        setTimeout (function () {
            v.target; computer.style.backgroundImage = 'url("scissors-md.png")'
        },100);
    }else{
    }
   return rockPaperScissor (userChoice, compChoice);

});
scissorsbtn.addEventListener("click", function (v) {
    v.target; player.style.backgroundImage = 'url("black.jpg")';
    setTimeout (function () {
        v.target; player.style.backgroundImage = 'url("scissors-md.png")'
    },100);
    let userChoice = "scissors";
    let rps = ["rock","paper","scissors"];
    let compChoice = rps[Math.floor(Math.random()*rps.length)];
    
    if (compChoice == "rock"){
        computer.style.backgroundImage = 'url("black.jpg")';
        setTimeout (function () {
            v.target; computer.style.backgroundImage = 'url("rock-md.png")'
        },100);
    }else if (compChoice == "paper"){
        computer.style.backgroundImage = 'url("black.jpg")';
        setTimeout (function () {
            v.target; computer.style.backgroundImage = 'url("paper-md.png")'
        },100);
    }else if (compChoice == "scissors") {
        computer.style.backgroundImage = 'url("black.jpg")';
        setTimeout (function () {
            v.target; computer.style.backgroundImage = 'url("scissors-md.png")'
        },100);
    }else{
    }
   return rockPaperScissor (userChoice, compChoice);
});