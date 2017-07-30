
// constructorf to create flashcard
function Flashcard(front, back, cloze) {
  this.front = front;
  this.back = back;
  this.cloze = cloze; 
    // method which prints all of the stats for a flashcard
    this.printInfo = function() {
      console.log("front: " + this.front + "\nback: " + this.back +
      "\ncloze: " + this.cloze);
      console.log("\n-------------\n");
    };

    this.basicCard = function() {
        return {
          type: "input",
          message: front,
          name: back
        }
    }

    this.clozeCard = function() {
        return {
          type: "input",
          message: cloze,
          name: back
        }
    }
};

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


// exports flashcard constructor
module.exports = {Flashcard: Flashcard, questions: questions};