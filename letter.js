console.log("connected");
//************constructor functon*******/
function Letter(char) {
    this.char = char;
    this.guessed = false;
   // this.right = right;
   this.dash = () => {
       if ( this.guessed === false) {
           return "_";
       } else {
           return this.char;
       }
   } 
    this.change =  (guessedLetter) => {
      if (this.char.toUpperCase() === guessedLetter.toUpperCase()) {
        // console.log(this.correct);
        console.log(input[i]);
         this.guessed = true;
         return true;
      }
      return false;
    };
  }


//************printInfo method and applies it to all Letter objects*****/
  Letter.prototype.printInfo = () => {
    console.log(this.dash, this.guessed, this.right, this.change);
  };
// initializes the variable newLetter to be a Letter object which will take
// in all of the user's guesses
// let newLetter = new Letter(guesses.dash, guesses.guessed, guesses.right);

module.exports = Letter;
