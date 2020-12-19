// --------------------------------- Example 1 --------------------------------- //
// Global Variable
var friend = "Chandler Bing";

function joke() {
  // 'friend' is accessible inside joke
  console.log(friend + " makes a joke."); // will console log "Chandler Bing makes a joke."
}

joke();

// --------------------------------- Example 2 --------------------------------- //
function add() {
  var num1 = 4;
  var num2 = 6;

  var sum = num1 + num2;
  // 'num1', 'num2', and 'sum' are accessible inside 'add' but not outside
  console.log(num1 + " + " + num2 + " = " + sum); // will console log "4 + 6 = 10"
}

add();
// console.log(`${num1} + ${num2} = ${sum}`); // uncomment this line to see that this will give you an error saying that 'num1' is not defined

// --------------------------------- Example 2 --------------------------------- //
function outerFunction() {
  var whosThatGirl = "It's Jess!"; // this is a local variable for 'outerFunction' which means it is only available within outerFunction's scope
  function innerFunction() {
    console.log("Who's that girl?\n" + whosThatGirl); // we can access it inside the 'innerFunction' because 'innerFunction' has access to the surrounding environment's scope
  }
  innerFunction();
}

outerFunction();
