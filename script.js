//MAKE SURE TO ALWAYS STATE let WHEN USING A LOOP 
//CALL FUNCTIONS WITHIN LOOP INSTEAD OF FUNCTION ASSIGNED VARIABLES. OTHERWISE ONLY VALUE WILL BE RETURNED.

alert("Press [Ctrl + SHIFT + I] to open the Console.");
alert("Reload the page with the console open. Or press enter to proceed."); 

const choices = ["rock", "paper", "scissors"]; 

let computerChoice; 
function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length); 
    let computerChoice = choices[randomChoice]; 
    return computerChoice;    
}

let humanChoice; 
function getHumanChoice() {
    humanChoice = window.prompt('Choose "rock", "paper" or "scissors" my friend. ^.^');
    humanChoice = humanChoice.toLowerCase(); 
    if (humanChoice.toLowerCase() == "rock" || 
        humanChoice.toLowerCase() == "paper" ||
        humanChoice.toLowerCase() == "scissors") {
            return humanChoice; 
    } else {
        alert("You are not choosing 'rock', 'paper' or 'scissors'. Reload the page my friend..."); 
        return null; 
    }
}
humanChoice = getComputerChoice(); 

function playGame() {
    let humanScore = 0; 
    let computerScore = 0; 

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("It's a tie");
        } else if (humanChoice == "rock" && computerChoice == "scisssors") {
            console.log("Rock beats Scissors");
            return humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("Scissors beat Paper");
            return humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("Paper beats Rock");
            return humanScore++; 
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("Rock beats Scissors");
            return computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("Scissors beat Paper");
            return computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("Paper beats Rock");
            return computerScore++;
        }
    }

    for (let i = 1; i<= 5; i++) {

        if (i == 1) {
            console.log("~~~ROUND 1~~~");
        } else if (i == 2) {
            console.log("~~~ROUND 2~~~"); 
        } else if (i == 3) {
            console.log("~~~ROUND 3~~~"); 
        } else if (i == 4) {
            console.log("~~~ROUND 4~~~"); 
        } else if (i == 5) {
            console.log("~~~ROUND 5~~~"); 
        } else {
            break;
        }

        getHumanChoice(); 
        console.log("H:", humanChoice); 
        computerChoice = getComputerChoice(); 
        console.log("C:", computerChoice); 
        playRound(humanChoice, computerChoice); 
    } 

    console.log ("💫~~~~~~~SCORES~~~~~~~💫");

    if (humanScore > computerScore) {
        console.log("Human:", humanScore);
        console.log("Computer:", computerScore); 
        console.log(`YOU WIN ${humanScore} TO ${computerScore}!!!!`);
    } else if (computerScore > humanScore) {
        console.log("Human:", humanScore);
        console.log("Computer:", computerScore); 
        console.log(`COMPUTER WINS ${computerScore} TO ${humanScore}....`);
    } else {
        console.log("Human:", humanScore);
        console.log("Computer:", computerScore); 
        console.log("FUNKY TIE!! WANNA REMATCH??"); 
    }
}
playGame(); 
