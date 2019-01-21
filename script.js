
var NUMBER = Math.round(Math.random()*100)
var inputEl = document.querySelector('.input');
var answer = "I'm sure it's fine"
var answerField = document.querySelector('.answer');
answerField.innerHTML = answer;
var numGuesses = 0
var gentleEncouragingWords = document.querySelector('.gentleencouragement');

//GUESS BOTTON
var guessEl = document.querySelector('.guess');

var guessButton = document.querySelector('.guessbutton');
guessButton.addEventListener('click', guessCheck);

function guessCheck () {
	numGuesses += 1;
	guessEl.innerHTML = inputEl.value
	console.log("Guess :" + " " + numGuesses + " => " + inputEl.value);
	console.log("Number = " + NUMBER);
	console.log(numGuesses);

	if (numGuesses == 1) {
		document.getElementById("num-guesses").innerText = "You've guessed: " + numGuesses + " time";
	} else {
		document.getElementById("num-guesses").innerText = "You've guessed: " + numGuesses + " times";
	}
	if (inputEl.value == NUMBER) {
	console.log("Correct!")
	answerField.innerHTML = "Correct! I never thought you had it in you. It's probably luck."
	//are you cheating??
	} else if ((inputEl.value - NUMBER)>0 && (inputEl.value - NUMBER)<10){
	console.log("a little too high...");
	answerField.innerHTML = "Maybe be less aggressive"

	} else if ((inputEl.value - NUMBER)>9 && (inputEl.value - NUMBER)<30){
	console.log("Way High!!");
	answerField.innerHTML = "nothing's Wrong. nothing at all."

	} else if ((inputEl.value - NUMBER)<0 && (inputEl.value - NUMBER)>-10){
	console.log("a little too low...")
	answerField.innerHTML = "You're not being confident enough!"

	} else if ((inputEl.value - NUMBER)<-9 && (inputEl.value - NUMBER)>-30){
	console.log("Way Low!!");
	answerField.innerHTML = "Nothing's wrong. I mean, it's fine.";
	}

	if (numGuesses > 5 && numGuesses < 10) {
	console.log(numGuesses)
	gentleEncouragingWords.innerHTML = "Wow, I can't believe you haven't gotten it yet!";
	} else if (numGuesses >= 10 && numGuesses < 15) {
	console.log(numGuesses)
	gentleEncouragingWords.innerHTML = "Jeez maybe you ought to give up..."
	} else if (numGuesses >= 15 && numGuesses < 18) {
	console.log(numGuesses)
	gentleEncouragingWords.innerHTML = "Haha..."
	} else if (numGuesses >= 18 && numGuesses < 20) {
	console.log(numGuesses)
	gentleEncouragingWords.innerHTML = "Hahahahah...!"
	} else if (numGuesses >= 20 && numGuesses < 25) {
	console.log(numGuesses)
	gentleEncouragingWords.innerHTML = "Hahahahahahaha...!!"
	} else if (numGuesses >= 25) {
	gentleEncouragingWords.innerHTML = "the answer is " + NUMBER + ". This stopped being funny a while ago.";
	}

};

//DISPLAY RESULT
var resultField = document.querySelector('.result')

//CLEAR BUTTON
var clearButton = document.querySelector('.clearbutton');
clearButton.addEventListener('click', clearCheck);

function clearCheck () {
	inputEl.value = "";
	console.log("Clear");
	gentleEncouragingWords.innerHTML = "Sure. Clear.";
	answerField.innerHTML = "";
	guessEl.innerHTML = "00";
}

var resetButton = document.querySelector('.resetbutton');
resetButton.addEventListener('click', newNumber);
function newNumber () {
	console.log("Reset")
	var NEW_NUMBER = Math.round(Math.random()*100);
	NUMBER = NEW_NUMBER;
	gentleEncouragingWords.innerHTML = "If you didn't get it then, why would you get it now?"
	answerField.innerHTML = "You want to try again? Why?";
	guessEl.innerHTML = "00";
	numGuesses = 0;
	if (numGuesses == 1) {
		document.getElementById("num-guesses").innerText = "You've guessed: " + numGuesses + " time";
	} else {
		document.getElementById("num-guesses").innerText = "You've guessed: " + numGuesses + " times";
	}
}
