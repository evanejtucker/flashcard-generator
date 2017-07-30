
// Global Variables
//---------------------------------------------------------------------------
var Flashcard = require("./cardCreator");
var inquirer = require("inquirer");

var cardType = process.argv[2];


// Flashcards
//---------------------------------------------------------------------------
var question1 = new Flashcard(
  "who was the first president of the United States?",
  "George Washington",
  "... was the first president of the united states."
  );

var question2 = new Flashcard(
  "What metal has the highest melting point?",
  "tungsten",
  "... is the metal with the highest melting point."
  );

var question3 = new Flashcard(
  "Who invented bifocals?",
  "benjamin franklin",
  "... invented the bifocals"
  );

var question4 = new Flashcard(
  "Waht is the largest mammal?",
  "blue whale",
  "The ... is the largest mammal on Earth"
  );

var question5 = new Flashcard(
  "What Planet is farthest from the Sun?",
  "neptune",
  "... is the farthest planet from the Sun."
  );

var question6 = new Flashcard(
  "What is the largest ocean on Earth?",
  "pacific",
  "The ... is the largest ocean on Earth"
  );

var questions = [question1, question2, question3, question4, question5, question6];

var correct = 0;
var incorrect = questions.length - correct;

// Functions
//---------------------------------------------------------------------------

// will run questions for cloze cards
function clozeCard() {
	inquirer.prompt([
		{
			type: "input",
			message: questions[0].cloze,
			name: "userGuess"

		},

	]).then(function (answers) {
		if(answers.userGuess === questions[0].back) {
			console.log("Correct!");
			correct++;
		} else {
			console.log("Sorry thats not the answer,\nthe correct answer was: " + questions[0].back)
		}

	});

}


// will run questions for basic cards
function basicCard() {
	inquirer.prompt([
		{
			type: "input",
			message: questions[0].front,
			name: "userGuess"

		},

	]).then(function (answers) {
		if(answers.userGuess === questions[0].back) {
			console.log("Correct!");
			correct++;
		} else {
			console.log("Sorry thats not the answer,\n the correct answer was:" + questions[0].back)
		}

	});

	// console.log("\nCorrect: " + correct + " || " + "Incorrct: " + incorrect);
}


// Main Process
//---------------------------------------------------------------------------

switch(cardType) {
	case "basic":
		console.log("basic card selected!");
		basicCard();
		break;
	case "cloze":
		console.log("cloze card selected!");
		clozeCard();
		break;
	default:
		// if cardType not recognized
		console.log("only basic or cloze");
}