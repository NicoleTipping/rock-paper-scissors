// This function getComputerChoice will randomly return one of the following string values: "rock", "paper", or "scissors"
function getComputerChoice() {
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    // SET choice to a random whole number between 0 and 2
    let choice = Math.floor(Math.random() * 3);
    // IF choice is equal to zero
    if(choice == 0){
        // return rock
        return rock;
    }
    // ELSE IF choice is equal to one
    else if (choice == 1) {
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
