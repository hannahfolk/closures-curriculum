// Grabbing all of our DOM nodes
var choices = document.querySelectorAll(".choice");
var displayChoicesDiv = document.querySelector("#displayChoices");
var playerChoiceDiv = document.querySelector("#playerChoice");
var computerChoiceDiv = document.querySelector("#computerChoice");
var resultsDiv = document.querySelector("#results");
var scoresDiv = document.querySelector("#scores");
var winsDiv = document.querySelector("#wins");
var tiesDiv = document.querySelector("#ties");
var lossesDiv = document.querySelector("#losses");
var clearBtn = document.querySelector("#clearScores");

function rps() {
  // Define rps' local variables `wins`, `ties`, and `losses` and set them all equal to 0 to start

  function seeWhoWon(user, computer) {
    // Check winning, losing, and tieing conditions
    // If win, display "You won this round!" in the `resultsDiv` and increment `wins`.
    // If lose, display "You lost this round :(" in the `resultsDiv` and increment `losses`.
    // If tie, display "You tied." in the `resultsDiv` and increment `ties`.
  }

  var setOfClosures = {
    getChoices: function (event) {
      // Using `event.target`, pull the id which represents the `userChoice`
      // Using Math.random() and an array of computer choices, get the `computerChoice`
      // Display the `userChoice` in `playerChoiceDiv` and `computerChoice` in `computerChoiceDiv`
      // Call `seeWhoWon` here with the proper parameters
    },
    getWins: function () {
      // Return the number of wins
    },
    getTies: function () {
      // Return the number of ties
    },
    getLosses: function () {
      // Return the number of losses
    },
    clearScores: function () {
      // Reset `wins`, `ties`, and `losses` back to 0
      // Clear any divs that you would like to clear

      // These hide our cards so we don't see them until the user begins to play the game
      displayChoicesDiv.classList.add("hide");
      scoresDiv.classList.add("hide");
      clearBtn.classList.add("hide");
    },
  };

  return setOfClosures;
}

// Create an object that holds all your closures by calling `rps` and setting it to a variable

choices.forEach(function (choiceBtn) {
  choiceBtn.addEventListener("click", function (event) {
    // Using your newly created object, call `getChoices`, and feed in `event`.

    // Display `wins`, `ties`, and `losses` in their respective divs

    // These will show our cards when the user starts playing the game
    displayChoicesDiv.classList.remove("hide");
    scoresDiv.classList.remove("hide");
    clearBtn.classList.remove("hide");
  });
});

// Using your object, add an event listener to clear scores
