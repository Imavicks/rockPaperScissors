const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('compScore');
const scoreBoard_div = document.querySelector('.scoreBoard');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

rock_div.addEventListener('click', function() {
    console.log('hey you clicked on rock');
});

paper_div.addEventListener('click', function() {
    console.log('hey you clicked on paper');
});

scissors_div.addEventListener('click', function() {
    console.log('hey you clicked on scissors');
});
