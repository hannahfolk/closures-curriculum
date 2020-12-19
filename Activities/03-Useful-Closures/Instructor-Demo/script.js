function fight() {
  // private variables
  var amtOfAtkStrikes = 0;
  var amtOfTimesBeenHit = 0;

  function strike(type) {
    if (type === "attacking") {
      amtOfAtkStrikes++;
    } else if (type === "getting hit") {
      amtOfTimesBeenHit++;
    }
    console.log(`${type}...`);
  }

  var setOfClosures = {
    attack: function () {
      strike("attacking");
    },
    getHit: function () {
      strike("getting hit");
    },
    getAmtOfAtkStrikes: function () {
      return "Amount of times you've attacked: " + amtOfAtkStrikes;
    },
    getAmtOfTimesBeenHit: function () {
      return "Amount of times you've been hit: " + amtOfTimesBeenHit;
    },
    getResults: function () {
      if (amtOfAtkStrikes > amtOfTimesBeenHit) {
        return "You're the winner!";
      } else if (amtOfAtkStrikes === amtOfTimesBeenHit) {
        return "You tied!";
      } else {
        return "You lost!";
      }
    },
  };

  return setOfClosures;
}

// ------ GAME 1 ------ //
console.log("----------- GAME 1 -----------");
var game1 = fight();

console.log(game1.getAmtOfAtkStrikes());
console.log(game1.getAmtOfTimesBeenHit());

game1.attack();
game1.attack();
game1.getHit();
game1.attack();

console.log(game1.getAmtOfAtkStrikes());
console.log(game1.getAmtOfTimesBeenHit());
console.log(game1.getResults());

// ------ GAME 2 ------ //
console.log("----------- GAME 2 -----------");
var game2 = fight();
console.log(game2.getAmtOfAtkStrikes());
console.log(game2.getAmtOfTimesBeenHit());

game2.getHit();
game2.attack();
game2.getHit();
game2.attack();
game2.getHit();

console.log(game2.getAmtOfAtkStrikes());
console.log(game2.getAmtOfTimesBeenHit());
console.log(game2.getResults());
