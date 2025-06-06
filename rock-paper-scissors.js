// This function getComputerChoice will randomly return one of the following string values: "rock", "paper", or "scissors"
function getComputerChoice() {
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    // SET choice to a random whole number between 0 and 2
    let computerChoice = Math.floor(Math.random() * 3);
    // IF choice is equal to zero
    if(computerChoice == 0){
        // return rock
        return rock;
    }
    // ELSE IF choice is equal to one
    else if (computerChoice == 1) {
        // return paper
        return paper;
    }
    // ELSE IF choice is equal to two
    else {
        // return scissors
        return scissors;
    }
}
console.log(getComputerChoice());

// This function getHumanChoice will get the human players choice and returns one of the following string values: "rock", "paper", or "scissors"
function getHumanChoice() {
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    // SET userChoice to fill out a prompt and make a choice
    let userChoice = prompt("Rock, Paper, or Scissors");
    // If the userChoice equals rock
    if(userChoice.toLowerCase() === "rock"){
        // return rock
        return rock;
    }
    // ELSE IF the userChoice equals paper
    else if(userChoice.toLowerCase() === "paper") {
        // return paper
        return paper;
    }
    // ELSE IF the userChoice equals scissors
    else if(userChoice.toLowerCase() === "scissors") {
        // return scissors
        return scissors;
    }
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

// This function playRound will take the human and computer choices as arguments, plays a single round, increments the round winner's score and logs a winner
function playRound(humanc) {

}