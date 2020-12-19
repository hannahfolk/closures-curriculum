function outerFunction() {
  var str = "The quick brown fox jumped over the dog.";

  function innerFunction() {
    // `split` turns a string into an array
    // `reverse` only works on arrays
    // `join` turns an array back into a string
    var reversed = str.split("").reverse().join("");
    console.log(reversed);
  }
  innerFunction();
}

outerFunction();
