// This function getComputerChoice will randomly return one of the following string values: "rock", "paper", or "scissors"
function getComputerChoice() {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';
    // SET choice to a random whole number between 0 and 2
    let computerChoice = Math.floor(Math.random() * 3);
    // IF choice is equal to zero
    if (computerChoice == 0) {
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
// This function getHumanChoice will get the human players choice and returns one of the following string values: "rock", "paper", or "scissors"
function getHumanChoice() {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';
    // SET userChoice to fill out a prompt and make a choice
    let userChoice = prompt('Rock, Paper, or Scissors');
    // If the userChoice equals rock
    if (userChoice.toLowerCase() === 'rock') {
        // return rock
        return rock;
    }
    // ELSE IF the userChoice equals paper
    else if (userChoice.toLowerCase() === 'paper') {
        // return paper
        return paper;
    }
    // ELSE IF the userChoice equals scissors
    else if (userChoice.toLowerCase() === 'scissors') {
        // return scissors
        return scissors;
    }
}
// This function playGame will play five rounds and keep track of the scores and declare the winner at the end
function playGame() {
    let userScore = 0;
    let computerScore = 0;
    // This function playRound will take the human and computer choices as arguments, plays a single round, increment the round winner's score and logs a winner
    function playRound(userChoice, computerChoice) {
        let rock = 'rock';
        let paper = 'paper';
        let scissors = 'scissors';
        // IF userChoice equals rock and computerChoice is equals rock
        if (userChoice === computerChoice) {
            // return "No Winner This Round"
            console.log('No Winner This Round');
        }
        // ELSE IF userChoice equals rock and computerChoice equals paper
        else if (userChoice === rock && computerChoice === paper) {
            // return computerScore + 1;
            console.log('You lose! Paper beats Rock.', ++computerScore);
        }
        // ELSE IF userChoice equals rock and computerChoice equals scissors
        else if (userChoice === rock && computerChoice === scissors) {
            // return userScore + 1;
            console.log('You Win! Rock beats Scissors.', ++userScore);
        }
        // ELSE IF userChoice equals paper and computerChoice equals rock
        else if (userChoice === paper && computerChoice === rock) {
            // return userScore + 1;
            console.log('You Win! Paper beats Rock.', ++userScore);
        }
        // ELSE IF userChoice equals paper and computerChoice equals scissors
        else if (userChoice === paper && computerChoice === scissors) {
            // return userScore + 1;
            console.log('You Lose! Scissors beats Paper.', ++computerScore);
        }
        // ELSE IF userChoice equals scissors and computerChoice equals rock
        else if (userChoice === scissors && computerChoice === rock) {
            // return computerScore + 1;
            console.log('You Lose! Rock beats Scissors.', ++computerScore);
        }
        // ELSE IF userChoice equals scissors and computerChoice equals paper
        else if (userChoice === scissors && computerChoice === paper) {
            // return userScore + 1;
            console.log('You Win! Scissors beats Paper.', ++userScore);
        }
    }

    function gameWinner() {
        if (userScore > computerScore) {
            console.log(`Yay you are the winner!!
                User: ${userScore} Computer: ${computerScore}`);
        } else if (computerScore > userScore) {
            console.log(`Sorry but you lost to a computer... 
                User: ${userScore} Computer: ${computerScore}`);
        } else if (userScore = computerScore) {
            console.log(`It's a tie!!! Play again to win or lose!
                User: ${userScore} Computer: ${computerScore}`);
        };
    }

    // Round 1
    let userSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);

    // Round 2
    userSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);

    // Round 3
    userSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);

    // Round 4
    userSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);

    // Round 5
    userSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);
    gameWinner();
}

playGame();