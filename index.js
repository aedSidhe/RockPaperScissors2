

function computerPlay() {
    let rand = Math.floor(Math.random() * 3);
    if(rand == 0) {
        return 'Rock';
    }
    if(rand == 1) {
        return 'Paper';
    }
    if(rand == 2) {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let p = playerSelection.toUpperCase();
    let c = computerSelection.toUpperCase();
    if(p == 'ROCK' && c == 'SCISSORS') {
        return 'You Win!';
    }
    if(p == 'PAPER' && c == 'ROCK') {
        return 'You Win!';
    }
    if(p == 'SCISSORS' && c == 'PAPER') {
        return 'You Win!';
    }
    if(p == 'ROCK' && c == 'ROCK') {
        return 'You Tie!';
    }
    if(p == 'PAPER' && c == 'PAPER') {
        return 'You Tie!';
    }
    if(p == 'SCISSORS' && c == 'SCISSORS') {
        return 'You Tie!';
    }
    if(p == 'ROCK' && c == 'PAPER') {
        return 'You Lose!';
    }
    if(p == 'PAPER' && c == 'SCISSORS') {
        return 'You Lose!';
    }
    if(p == 'SCISSORS' && c == 'ROCK') {
        return 'You Lose!';
    }

}

    let pScore = 0;
    let cScore = 0;

function game(pChoice) {
    
    
       let result = playRound(pChoice, computerPlay());
       const div = document.querySelector('#results')
       div.textContent = result;
        if(result == 'You Win!') {
            pScore++;
        }
        else if(result =='You Lose!') {
            cScore++;
        }
        div.textContent = "\n" + pScore + "-" + cScore;
    if(pScore == 5 || cScore == 5) {
    if(pScore > cScore) {
        div.textContent = '\nYou win the game!';
    }
    if(pScore < cScore) {
        div.textContent = '\nYou lose the game!';
    }
    if(pScore == cScore) {
        div.textContent = '\nYou tie the game!';
    }
    pScore = 0;
    cScore = 0;
}
}



const Rock = document.querySelector('#Rock');
Rock.addEventListener('click', () => game('ROCK'));

const Paper = document.querySelector('#Paper');
Paper.addEventListener('click', () => game('PAPER'));

const Scissors = document.querySelector('#Scissors');
Scissors.addEventListener('click', () => game('SCISSORS'));

