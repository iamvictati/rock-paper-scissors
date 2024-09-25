//MAKE SURE TO ALWAYS STATE let WHEN USING A LOOP 
//CALL FUNCTIONS WITHIN LOOP INSTEAD OF FUNCTION ASSIGNED VARIABLES. OTHERWISE ONLY VALUE WILL BE RETURNED.

/* alert("Press [Ctrl + SHIFT + I] to open the Console.");
alert("Reload the page with the console open. Or press enter to proceed.");  */

let humanScore = 0; 
let computerScore = 0; 
/* let roundCounter = 0;  */
let humanChoice = ""; 

const choices = ["rock", "paper", "scissors"]; 
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn"); 
const scissorsBtn = document.querySelector("#scissorsBtn"); 

rockBtn.addEventListener("click", (evt) => {
    humanChoice = "rock"; 
    console.log("H:", humanChoice); 
    playGame(); 
}); 

paperBtn.addEventListener("click", (evt) => {
    humanChoice = "paper"; 
    console.log("H:", humanChoice); 
    playGame(); 
});

scissorsBtn.addEventListener("click", (evt) => {
    humanChoice = "scissors"; 
    console.log("H:", humanChoice); 
    playGame(); 
});

function playGame() {

    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    playRound(); 

    if (humanScore == 5) {
        console.log("👾WHO DA WINNER???👾");
        console.log("Human:", humanScore);
        console.log("Computer:", computerScore); 
        console.log(`YOU WIN ${humanScore} TO ${computerScore}!!!! YAYYYY!!`);
        console.log("Refresh to restart game.:)");
    } else if (computerScore == 5) {
        console.log("👾WHO DA WINNER???👾");
        console.log("Human:", humanScore);
        console.log("Computer:", computerScore); 
        console.log(`COMPUTER WINS ${computerScore} TO ${humanScore}.... YOU LOSE!!`);
        console.log("Refresh to restart game.:)");
    }
}

function playRound() {
    let computerChoice = getComputerChoice(); 

    if (humanChoice == computerChoice) {
        console.log("It's a tie");
        return; 
    }

    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("Rock beats Scissors");

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("Scissors beat Paper");
        
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("Paper beats Rock");
         
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("Rock beats Scissors");
        
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("Scissors beat Paper");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("Paper beats Rock");
        
    }
}

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length); 
    let computerChoice = choices[randomChoice]; 
    console.log("C:", computerChoice);  
    return computerChoice; 
}


