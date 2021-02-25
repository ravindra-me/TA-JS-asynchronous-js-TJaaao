// # Inheritance

// Convert the below requirements into inheritance using prototypal patters.

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

function Animal(location, numberOfLegs) {
  this.location = location;
  this.numberOfLegs = numberOfLegs;
}

Animal.prototype = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation) {
    this.location = newLocation;
  },
  summary: function () {
    returns`I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:
function Dog(location, numberOfLegs, name, color) {
  Animal.apply(this, [location, numberOfLegs]);
  this.name = name;
  this.color = color;
}

Dog.prototype = {
  bark: function () {
    console.log(`I live in ${this.location} and I can bark 🐶`);
  },
  changeName: function (newName) {
    this.name = newName;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
  summary: function () {
    return `I am ${name} and I am of ${color} color. I can also bark`;
  },
};

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

let dog1 = new Dog('Himachal', 4, 'Pochi', 'Black');

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

class Cat extends Animal {
  constructor(location, numberOfLegs, name, colorOfEyes) {
    super(location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
  }
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  }
  changeName(newName) {
    this.name = newName;
  }
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
  }
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  }
}

let cat1 = new Cat('Himachal', 4, 'Pochi', 'red');
