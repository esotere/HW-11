const [,,...input] = process.argv;
const inquirer = require("inquirer");
const word = require("./word.js");
const letter = require("./letter.js")
const fs = require("fs");

let thing = " ";

//***********dash object**************/
let dash = {
    blank: "_",
    guess: () => {input === letter? console.log(input): console.log(blank) }
}

//************functions***************/
let right = () => {
    if (input === letter) {
        dash = this.right;
    }
}

let notRight = () => {
    if (input !== letter) {
        dash = this.dash;
    }
}

guessWord = () => {
    fs.readFile("randomWords.txt", "utf8", function (err, data) {
        if (err) {
            return console.error(err);
        }
        //console.log(data); 
        // Break the string down by comma separation and store the contents into the output array.
        let output = data.split("\n");
        let arrange = [];
        let play = [];
        // // Loop Through the newly created output array
        for (let i = 0; i < output.length; i++) {
            play = output[Math.floor(Math.random() * output.length)]

            arrange.push(play)
            // Print each element (item) of the array/
            // console.log(arrange[0]);
        }
        console.log(arrange[1]);
        // console.log(output);

    });
}

record = () => {
    fs.appendFile("guessedLetters.txt",  ", " + "\n" +input[i], function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Text file updated")
    })
} 


//************printInfo method and applies it to all Letter objects*****/
// Letter.prototype.printInfo = () => {
//     console.log();
//   };

//************constructor functon*******/
// function Letter(dash, guessed, correct) {
//     this.dash = dash;
//     this.guessed = false;
//     this.correct = correct;
//     this.change =  () => {
//       if (input[i] === letter) {
//         // console.log(this.correct);
//         console.log(input[i]);
//         this.guessed = true;
//       }
//     };
//   }
       


        //one will be deleted either prompt or switch 
//*************prompt*************************************/

inquirer.prompt([
    {
      name: "_",
      message: "Guess a letter?"
      
     // record()
    },    
          
     {
      name: "confirm",
      message: "Are you sure y/n?"
    }
    // {
    //   name: "correct",
    //   message: "How old are you?"
    // }, {
    //   name: "language",
    //   message: "What is your favorite programming language?"
    // }
  ]).then((guesses) => {    
    // initializes the variable newLetter to be a Letter object which will take
    // in all of the user's guesses
    let newLetter = new Letter(
        guesses.dash, 
        guesses.guessed, 
        guesses.right
    );

    // printInfo method is run to show that the newLetter object was successfully created and filled
    newLetter.printInfo();
    console.log(newLetter);
  });
  


// *************switch conditions based on guesses*********/
//  switch(input) {

//     case correctGuess:
//         right();
//         break;

//     case wrongGuess:
//         notRight();
//         break;

//     default: 
//         console.log("enter guess");
//         break;
        
//   }