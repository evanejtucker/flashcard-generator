
// Global Variables
//---------------------------------------------------------------------------
var inquirer = require("inquirer");
var cardCreator = require("./cardCreator");
var flashcard = cardCreator.Flashcard;
var questions = cardCreator.questions;

var cardType = process.argv[2];

var correct = 0;
var incorrect = 0;

// Functions
//---------------------------------------------------------------------------


function basic() {
   inquirer.prompt(questions.map(function(question) {
   		return question.basicCard();
    })).then(function (answers) {
   	for (var back in answers) {
   		if (answers[back] === back) {
   			correct++
   		} else {
   			incorrect++
   		}
	}
	console.log("Correct guesses = " + correct);
	console.log("Incorrect guesses = " + incorrect);
	console.log("----------------------------------");
	playBasicAgain();

  });
  
}


function cloze() {
	inquirer.prompt(questions.map(function(question) {
   		return question.clozeCard();
    })).then(function (answers) {
   	for (var back in answers) {
   		if (answers[back] === back) {
   			correct++
   		} else {
   			incorrect++
   		}
	}
	console.log("Correct guesses = " + correct);
	console.log("Incorrect guesses = " + incorrect);
	console.log("----------------------------------");
	playClozeAgain();

  });

}

// replay basic
function playBasicAgain() {
	inquirer.prompt([
		{
			type: "confirm",
			message: "Would you like to play again?",
			name: "replay"
		},

	]).then(function (answer) {
	    if(answer.replay) {
	    	basic();
	    } else {
	    	console.log("this game isnt for the weak of heart anyway.")
	    }
	});
}

// replay cloze 
function playClozeAgain() {
	inquirer.prompt([
		{
			type: "confirm",
			message: "Would you like to play again?",
			name: "replay"
		},

	]).then(function (answer) {
	    if(answer.replay) {
	    	cloze();
	    } else {
	    	console.log("this game isnt for the weak of heart anyway.")
	    }
	});
}

// Main Process
//---------------------------------------------------------------------------

switch(cardType) {
	case "basic":
		console.log("basic card selected!");
		basic();
		break;
	case "cloze":
		console.log("cloze card selected!");
		cloze();
		break;
	default:
		// if cardType not recognized
		console.log("only basic or cloze");
}