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
