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

function game() {
    pScore = 0;
    cScore = 0;
    for(let i = 0; i < 5; i++) {
       let result = playRound(prompt('Choose'), computerPlay());
       console.log(result);
        if(result == 'You Win!') {
            pScore++;
        }
        else if(result =='You Lose!') {
            cScore++;
        }
    }
    if(pScore > cScore) {
        console.log('\nYou win the game!');
    }
    if(pScore < cScore) {
        console.log('\nYou lose the game!');
    }
    if(pScore == cScore) {
        console.log('\nYou tied the game!');
    }
}