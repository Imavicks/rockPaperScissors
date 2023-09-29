let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('compScore');
const scoreBoard_div = document.querySelector('.scoreBoard');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win (userChoice, computerChoice) {
    userScore += 1;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "(user)".fontsize(3).sup();
    const smallCompWord = "(comp)".fontsize(3).sup();
    result_p.innerHTML = userChoice + smallUserWord + " beats " + computerChoice + smallCompWord + " . You win!";
}

function lose (userChoice, computerChoice) {
    computerScore += 1;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "(user)".fontsize(3).sup();
    const smallCompWord = "(comp)".fontsize(3).sup();
    result_p.innerHTML = userChoice + smallUserWord + " loses to  " + computerChoice + smallCompWord + " . You lost!";
}

function draw (userChoice, computerChoice) {
    const smallUserWord = "(user)".fontsize(3).sup();
    const smallCompWord = "(comp)".fontsize(3).sup();
    result_p.innerHTML = userChoice + smallUserWord + " equals " + computerChoice + smallCompWord + " . its a draw!";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case 'scissorscisors':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('rock');
    });

    paper_div.addEventListener('click', function() {
        game('paper');
    });

    scissors_div.addEventListener('click', function() {
        game('scissors');
    });
}
main();
