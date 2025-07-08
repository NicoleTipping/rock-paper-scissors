// This function getComputerChoice will randomly return one of the following string values: "rock", "paper", or "scissors"
function getComputerChoice() {
    let Rock = 'Rock';
    let Paper = 'Paper';
    let Scissors = 'Scissors';
    // SET choice to a random whole number between 0 and 2
    let computerChoice = Math.floor(Math.random() * 3);
    // IF choice is equal to zero
    if (computerChoice == 0) {
        // return rock
        return Rock;
    }
    // ELSE IF choice is equal to one
    else if (computerChoice == 1) {
        // return paper
        return Paper;
    }
    // ELSE IF choice is equal to two
    else {
        // return scissors
        return Scissors;
    }
}

// This function playGame will play five rounds and keep track of the scores and declare the winner at the end
function playGame() {
    let userScore = 0;
    let computerScore = 0;
    // This function playRound will take the human and computer choices as arguments, plays a single round, increment the round winner's score and logs a winner
    function playRound(userChoice, computerChoice) {
        let Rock = 'Rock';
        let Paper = 'Paper';
        let Scissors = 'Scissors';
        // IF userChoice equals rock and computerChoice is equals rock
        if (userChoice === computerChoice) {
            // return "No Winner This Round"
            results.textContent = 'No Winner This Round';
        }
        // ELSE IF userChoice equals rock and computerChoice equals paper
        else if (userChoice === Rock && computerChoice === Paper) {
            // return computerScore + 1;
            results.textContent = 'You lose! Paper beats Rock.'; 
            score.textContent = `You: ${userScore} --- Computer: ${++computerScore}`;
        }
        // ELSE IF userChoice equals rock and computerChoice equals scissors
        else if (userChoice === Rock && computerChoice === Scissors) {
            // return userScore + 1;
            results.textContent = 'You Win! Rock beats Scissors.'; 
            score.textContent = `You: ${++userScore} --- Computer: ${computerScore}`;
        }
        // ELSE IF userChoice equals paper and computerChoice equals rock
        else if (userChoice === Paper && computerChoice === Rock) {
            // return userScore + 1;
            results.textContent = 'You Win! Paper beats Rock.'; 
            score.textContent = `You: ${++userScore} --- Computer: ${computerScore}`;
        }
        // ELSE IF userChoice equals paper and computerChoice equals scissors
        else if (userChoice === Paper && computerChoice === Scissors) {
            // return userScore + 1;
            results.textContent = 'You Lose! Scissors beats Paper.';
            score.textContent = `You: ${userScore} --- Computer: ${++computerScore}`;
        }
        // ELSE IF userChoice equals scissors and computerChoice equals rock
        else if (userChoice === Scissors && computerChoice === Rock) {
            // return computerScore + 1;
            results.textContent ='You Lose! Rock beats Scissors.';
            score.textContent = `You: ${userScore} --- Computer: ${++computerScore}`;
        }
        // ELSE IF userChoice equals scissors and computerChoice equals paper
        else if (userChoice === Scissors && computerChoice === Paper) {
            // return userScore + 1;
            results.textContent = 'You Win! Scissors beats Paper.'
            score.textContent = `You: ${++userScore} --- Computer: ${computerScore}`;
        }
    };

    function gameWinner() {
        if (userScore === 5) {
            results.textContent = 'Yay you are the winner!!'
            score.textContent = `You: ${userScore} Computer: ${computerScore}`;
        } else if (computerScore === 5) {
            results.textContent = 'Sorry but you lost to a computer...'
            score.textContent = `You: ${userScore} Computer: ${computerScore}`;
        }
    };

    const rockBtn = document.querySelector('#rock-btn');
    
    rockBtn.addEventListener('click', () => {
        playRound(userChoice = "Rock", getComputerChoice());
        gameWinner();
    });
    
    const paperBtn = document.querySelector('#paper-btn');
    
    paperBtn.addEventListener('click', () => {
        playRound(userChoice = "Paper", getComputerChoice());
        gameWinner();
    });
    const scissorBtn = document.querySelector('#scissor-btn');
    
    scissorBtn.addEventListener('click', () => {
        playRound(userChoice = "Scissors", getComputerChoice());
        gameWinner();
    });

    let body = document.querySelector('body');

    let results = document.createElement('div');
    body.appendChild(results);


    let score = document.createElement('div');
    body.appendChild(score);
};

playGame();