
// constructorf to create flashcard
function Flashcard(front, back, cloze) {
  this.front = front;
  this.back = back;
  this.cloze = cloze; 
    // method which prints all of the stats for a character
    this.printInfo = function() {
      console.log("front: " + this.front + "\nback: " + this.back +
      "\ncloze: " + this.cloze);
      console.log("\n-------------\n");
    };
  };


// exports flashcard constructor
module.exports = Flashcard;