//Inheritance with "extends"

//create a class Animal 
class Animal {
    //has constructor and 3 params
    constructor(name, mainColor, sound) {
      this.name = name;
      this.mainColor = mainColor;
      this.sound = sound;
    }
    scream(intensity) {
      console.log(`${this.sound} ${'!'.repeat(intensity)}`);
    }
  }

  //Inheritance is a feature of object-oriented programming that allows
  //code reusability when a class includes property (attribute or method) 
  //of another class.

  //instead of recreating the above Animal classs for creating new types of animal i can reuse 
  //Animal and extend it depending on my needs
  // The class Cat has, by default, all the same attributes and methods as Animal but it will have some that just belong to the cat
  class Cat extends Animal {
    constructor(name, mainColor, sound, nbOfLegs) {
      // `super` refers to the constructor of the parent (Animal)
      // with super Cat gets all the attributes and methods of the Animal class
      super(name, mainColor, sound);
      this.nbOfLegs = nbOfLegs; // <== a new attribute, just for cats
    }
  }
  
  const garfield = new Cat('Garfield', 'orange', 'Meow', 4);
  console.log(garfield);
  // {
  //   name: 'Garfield',
  //   mainColor: 'orange',
  //   sound: 'Meow',
  //   nbOfLegs: 4
  // }
  
  garfield.scream(2); // <== Meow !!
  garfield.scream(5); // <== Meow !!!!!
  
  // 2nd example:
  class Chameleon extends Animal {
    // Override of the default constructor
    constructor(name) {
      super(name, 'green', '...');
    }
    // Add a new method 'changeColor()'
    changeColor(newColor) {
      this.mainColor = newColor;
    }
  }
  
  const pascal = new Chameleon('Pascal');
  pascal.changeColor('red');
  console.log(pascal);
  // {
  //   name: 'Pascal',
  //   mainColor: 'red', <== notice the difference
  //   sound: '...'
  // }
  


  // `super` refers to the constructor of the parent (Animal)
