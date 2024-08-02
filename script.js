//create a variable first and then assign it a function
//use Math.random() * varible.length to extract from different options 
const choices = ["rock", "paper", "scissors"]; 

let humanChoice = window.prompt("Choose rock, paper or scissors!");

function getHumanChoice() {
    if (humanChoice.toLowerCase() == "rock" ||
        humanChoice.toLowerCase() == "paper" ||
        humanChoice.toLowerCase() == "scissors") 
    {
        return humanChoice = humanChoice.toLowerCase(); 

    } else { 
        alert("You must choose rock, paper or scissors! Reload the page...");
        humanChoice = null; 
    }
}

getHumanChoice(); 

console.log(humanChoice);

let computerChoice = getComputerChoice(); 

function getComputerChoice() { 
    const randomChoice = Math.floor(Math.random() * choices.length); 
    const computerChoice = choices[randomChoice]; 
    return computerChoice; 
}

getComputerChoice(); 

console.log(computerChoice);

let humanScore;
let computerScore;

for (let round = 0; round < 5; round++) {
    playGame(); 
}

function playGame() {
    
    round = 0; 
    humanScore = 0;
    computerScore = 0; 

    function playRound(humanChoice, computerChoice) { 

        if (humanChoice == computerChoice) {
            console.log("It's a tie my friend!!");
            round++; 
        } else if (humanChoice == "rock" && computerChoice == "paper" ||
                humanChoice == "scissors" && computerChoice == "rock" ||
                humanChoice == "paper" && computerChoice == "scissors") {
                console.log("Looooooser!!!"); 
                computerScore++; 
                round++;
        } else if (humanChoice == "paper" && computerChoice == "rock" ||
                humanChoice == "rock" && computerChoice == "scissors" ||
                humanChoice == "scissors" && computerChoice == "paper") {
                console.log("You win!!! Yay!:))"); 
                humanScore++; 
                round++; 
        } else {
            console.log("You didn't choose a valid tool... ");
        }
    }
    playRound(humanChoice, computerChoice); 
}


