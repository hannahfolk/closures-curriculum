## The Problem
Write and execute a closure that emulates rock, paper, scissors. Plenty of pseudocode has been provided for you so that you can dive right into it. The user should be able to see whether they won, lost, or tied for that round. They can also see a record of how many wins, ties, and losses they have until they click a button to clear scores. Remember to use the instructor activity as a guide if you're feeling lost!

### Instructions

* Inside `rps`, create three private variables `wins`, `ties`, and `losses` and set them equal to 0.
* Inside `seeWhoWon`, use `if/else` statements to evaluate who won and display results. Increment your private variables accordingly.
* Inside `getChoices`, grab the user choice from the `event.target`. Get computer choice using an array of choices and `Math.random()`. Display choices and call `seeWhoWon` with your choices as parameters.
* Inside `getWins`, `getTies`, and `getLosses`, return the number of `wins`, `ties`, and `losses`, respectively.
* Inside `clearScores`, reset your `wins`, `losses`, and `ties` back to 0, and clear any divs you want to clear.

* Outside and below `rps`, call `rps` and set it equal to a variable. This will be an object that holds your set of closures.
* Inside the `choiceBtn.addEventListener`, use your object to call `getChoices` and feed in `event` as a parameter.
* Still inside the event listener, use your object to call `getWins`, `getTies`, and `getLosses` and display them in their respective divs.

* Finally, create an event listener for clearing scores.

* When finished with the above steps, open your `index.html` file in the browser.
* Play your game and test all functionality!