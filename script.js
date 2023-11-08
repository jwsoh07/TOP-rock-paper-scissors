function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playSingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) return 'tie';

    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'You Win! Rock beats Scissors';
        }
        return 'You Lose! Paper beats Rock';
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You Win! Paper beats Rock';
        }
        return 'You Lose! Scissors beats Paper';
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You Win! Scissors beats Paper';
        }
        return 'You Lose! Rock beats Scissors';
    }

    return 'Invalid selection';

}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt('Enter your choice!');
        const computerSelection = getComputerChoice();
        const result = playSingleRound(playerSelection, computerSelection);

        // display current round statistics
        console.log('==================================');
        console.log('Round: '+round);
        console.log('Player Choice: '+playerSelection);
        console.log('Computer Choice: '+computerSelection);
        console.log('Current round result: '+result);
        console.log('==================================');

        // record score
        if (result.includes('You Win')) {
            playerScore++;
        } else if (result.includes('You Lose')) {
            computerScore++;
        }
    }
    // report winner
    if (playerScore > computerScore) {
        console.log('Player Wins!');
    } else if (playerScore < computerScore) {
        console.log('Computer Wins!');
    } else {
        console.log('It\'s a tie!');
    }
}
