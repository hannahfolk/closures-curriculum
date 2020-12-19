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

// Creating the closure function
function rps() {
  // These are private variables for `rps`
  var wins = 0;
  var ties = 0;
  var losses = 0;

  function seeWhoWon(user, computer) {
    // Check winning conditions
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      resultsDiv.textContent = "You won this round!";
      wins++;
    }
    // Check losing conditions
    else if (
      (user === "rock" && computer === "paper") ||
      (user === "paper" && computer === "scissors") ||
      (user === "scissors" && computer === "rock")
    ) {
      resultsDiv.textContent = "You lost this round :(";
      losses++;
    }
    // All other possible combinations of user and computer choices are ties
    else {
      resultsDiv.textContent = "You tied.";
      ties++;
    }
  }

  var setOfClosures = {
    getChoices: function (event) {
      // Grabs id from button click, which will be "rock", "paper", or "scissors"
      var userChoice = event.target.id;

      // Uses Math.random to randomly choose between "rock", "paper", or "scissors"
      var computerChoices = ["rock", "paper", "scissors"];
      var randomNumber = Math.floor(Math.random() * 3);
      var computerChoice = computerChoices[randomNumber];

      playerChoiceDiv.innerHTML = `<strong>${userChoice}</strong>`;
      computerChoiceDiv.innerHTML = `<strong>${computerChoice}</strong>`;

      seeWhoWon(userChoice, computerChoice);
    },
    getWins: function () {
      return "Number of wins: " + wins;
    },
    getTies: function () {
      return "Number of ties: " + ties;
    },
    getLosses: function () {
      return "Number of losses: " + losses;
    },
    clearScores: function () {
      // Resetting everything
      wins = 0;
      ties = 0;
      losses = 0;

      playerChoiceDiv.innerHTML = "";
      computerChoiceDiv.innerHTML = "";
      resultsDiv.textContent = "";
      winsDiv.textContent = "";
      tiesDiv.textContent = "";
      lossesDiv.textContent = "";

      displayChoicesDiv.classList.add("hide");
      scoresDiv.classList.add("hide");
      clearBtn.classList.add("hide");
    },
  };

  return setOfClosures;
}

var closure = rps();

choices.forEach(function (choiceBtn) {
  choiceBtn.addEventListener("click", function (event) {
    closure.getChoices(event);

    winsDiv.textContent = closure.getWins();
    tiesDiv.textContent = closure.getTies();
    lossesDiv.textContent = closure.getLosses();

    displayChoicesDiv.classList.remove("hide");
    scoresDiv.classList.remove("hide");
    clearBtn.classList.remove("hide");
  });
});

clearScores.addEventListener("click", closure.clearScores);
