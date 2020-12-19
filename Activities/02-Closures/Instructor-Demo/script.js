// --------------------------------- Example 1 --------------------------------- //
// This is the same function as in activity 01-Lexical-Scope. The only difference is that `outerFunction` is returning `innerFunction` instead of calling it.
function outerFunction() {
  var whosThatGirl = "It's Jess!"; // this is a local variable for 'outerFunction' which means it is only available within outerFunction's scope
  function innerFunction() {
    console.log("Who's that girl?\n" + whosThatGirl); // we can access it inside the 'innerFunction' because 'innerFunction' has access to the surrounding environment's scope
  }
  return innerFunction;
}

var newGirl = outerFunction(); // 'outerFunction' has finished being called and executed by the end of this line
newGirl(); // but by calling 'newGirl' we can access 'whosThatGirl' after 'outerFunction' has finished running
// Try commenting out the line above to see the console log disappear.

// --------------------------------- Example 2 --------------------------------- //
// Checking to see if the product of two numbers is divisible by 7
function outerFunc(x) {
  function innerFunc(y) {
    var product = x * y;

    // % is the modulus operator and helps find the remainder of a division
    if (product % 7 === 0) {
      return true;
    } else {
      return false;
    }
  }
  return innerFunc;
}

var closure9 = outerFunc(9); // x = 9
var closure14 = outerFunc(14); // x = 14
var closure16 = outerFunc(16); // x = 16
console.log(closure9(10)); // y = 10, false because 9 * 10 = 90 which isn't divisible by 7
console.log(closure14(2)); // y = 2, true because 14 * 2 = 28 which is divisible by 7
console.log(closure16(3)); // y = 3, false because 16 * 3 = 48 which isn't divisible by 7
