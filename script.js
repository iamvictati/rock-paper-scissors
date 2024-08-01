//create a variable first and then assign it a function
//use Math.random() * varible.length to extract from different options 
const choices = ["rock", "paper", "scissors"]; 

let humanChoice = window.prompt("Choose rock, paper or scissors!");

function getHumanChoice() {
    if (humanChoice.toLowerCase() == "rock" ||
        humanChoice.toLowerCase() == "paper" ||
        humanChoice.toLowerCase() == "scissors") 
    {
        return humanChoice; 

    } else { 
        alert("You must choose rock, paper or scissors! Reload the page...");
    }
}

let computerChoice = getComputerChoice(); 

function getComputerChoice() { 
    const randomChoice = Math.floor(Math.random() * choices.length); 
    const computerChoice = choices[randomChoice]; 
    return computerChoice; 
}

let humanScore = 0; 
let computerScore = 0;  
        
function playRound(humanChoice, computerChoice) {
    
    if (humanChoice == computerChoice) {
        console.log("It's a tie my friend!!");
    } else if (humanChoice == "rock" && computerChoice == "paper" ||
            humanChoice == "scissors" && computerChoice == "rock" ||
            humanChoice == "paper" && computerChoice == "scissors") {
            console.log("Looooooser!!!"); 
            computerScore++; 
    } else {
            console.log("You win!!! Yay!:))"); 
            humanScore++; 
    }
}

console.log(humanChoice);
console.log(computerChoice);
playRound(humanChoice, computerChoice); 
   