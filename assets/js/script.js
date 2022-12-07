//**Declaring global variables to manipulate the DOM */
const btns = document.getElementsByTagName('button');
let rock = document.getElementById('r');
let scissors = document.getElementById('s');
let paper = document.getElementById('p');
const boxWin = document.getElementById('win-box');
const boxLose = document.getElementById('lose-box');
const restart = document.getElementById('restart');

/**Event listener for the player buttons */
document.addEventListener("DOMContentLoaded", function () {

	for (let button of btns) {
		button.addEventListener("click", function () {
			let playerChoice = this.getAttribute("data-choice");
			theGame(playerChoice);
		});
		

	}
});

/**Function for computers random choice */
function computerRandomChoice() {
	let options = ['rock', 'paper', 'scissors'];
	let randomNr = Math.floor(Math.random() * options.length);
	return options[randomNr];
}
/**The Game, a function for the computers and players possible outcomes*/
function theGame(playerChoice) {
	let compChoice = computerRandomChoice();
	if (compChoice === 'rock' && playerChoice === 'paper') {
		document.getElementById('info').innerHTML = "You coose paper & Computer choose rock!";
		playerWin();
	}
	if (compChoice === 'paper' && playerChoice === 'scissors') {
		document.getElementById('info').innerHTML = "You choose scissors & Computer choose paper!";
		playerWin();
	}
	if (compChoice === 'scissors' && playerChoice === 'rock') {
		document.getElementById('info').innerHTML = "You choose rock & Computer choose scissors!";
		playerWin();
	}
	if (compChoice === 'paper' && playerChoice === 'rock') {
		document.getElementById('info').innerHTML = "You choose rock & Computer choose paper!";
		compWin();
	}
	if (compChoice === 'scissors' && playerChoice === 'paper') {
		document.getElementById('info').innerHTML = "You choose paper & Computer choose scissors!";
		compWin();
	}
	if (compChoice === 'rock' && playerChoice === 'scissors') {
		document.getElementById('info').innerHTML = "You choose scissors & Computer choose rock!";
		compWin();
	} else if (compChoice === playerChoice) {
		document.getElementById('info').innerHTML = "Ohh, Its a draw!";
		drawGame();
	}
}