function outerFunction(arr) {
  function innerFunction(target) {
    for (var i = 0; i < arr.length; i++) {
      if (target === arr[i]) {
        return i;
      }
    }
    return -1;
  }
  return innerFunction;
}

var numbers = [1, 3, 2, 8, 320, 73, 9, 7, 38, 81];
var animals = ["dog", "cat", "chicken", "horse", "cow", "ant"];
var favThings = [
  true,
  false,
  25,
  "potatoes are life",
  "these are a few of my favorite things",
];
var indexOfNumbers = outerFunction(numbers);
var indexOfAnimals = outerFunction(animals);
var indexOfFavThings = outerFunction(favThings);
console.log(indexOfNumbers(7)); // console logs 7
console.log(indexOfAnimals("dog")); // console logs 0
console.log(indexOfFavThings("raindrops on roses")); // console logs -1
