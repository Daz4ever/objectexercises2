// Given the follow function:
//
function like() {
  return this.timesLiked++;

}
var pic1 = {
  url: 'lolcat.jpg',
  timesLiked: 0,
  // like: like (used for question 1)
};
var pic2 = {
  url: 'chucknorris.jpg',
  timesLiked: 0,
  // like: like (used for question 1)
};
// One
//
// Add or modify the above code to attach to the like function to pic1 and pic2 and then call it as a method to increment the timesLiked counters of those pics.

pic1.like();
pic2.like();

// Two

// Given this function

function hate() {
  this.timesLiked--;
}

// Apply it to the `pic1` and `pic2` without attaching the function to the objects themselves, using either the `apply` or `call` method.

hate.apply(pic1);
hate.apply(pic2);

// Given the following objects:

var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',
  showInfo:  function() {
    var answer='';
    for (var prop in this) {
      if (typeof this[prop] === "function") {}
      else
     answer += prop + ':' + this[prop]+'\n';

    }
    return answer;
  }
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};
// One

// Write code using __proto__ to make daughter inherit properties from mom. Print out each property that daughter has. What are they and what are their values?
// Two
//
// Add a method called showInfo to mom by attaching a function to it. Calling this method will print out all four properties.

daughter.__proto__ = mom;

console.log(daughter.showInfo());

// Four
//
// Given this Character type
//
function Character () {
}

Character.prototype.attack = function(enemy) {
  return this.health -= this.power;
};
// Write a Hero type that inherits it and overrides the attack method to randomly with 20% chance, double the dealt damage.
Hero.prototype = Object.create(Character.prototype);
Goblin.prototype = Object.create(Character.prototype);

function Goblin() {
  this.health = 6;
  this.power = 2;
}

function Hero() {
  this.power = 5;
  this.health = 10;
  this.attack = function(enemy) {
    var randNum = Math.floor(Math.random() * 10) + 1;
      if(randNum <= 2) {
       enemy.health -= this.power * 2;
      }
      else {
        enemy.health -= this.power;
      }


  };
}
var hero = new Hero();
var goblin = new Goblin();


console.log(hero.attack(goblin));
console.log(goblin.attack(hero));
