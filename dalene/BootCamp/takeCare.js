// Write a takeCare function that does the following:
// Bathes a pet once per week (every 7 ticks)
// Feeds the pet once per day the amount it is hungry
// brushes the pet once every other day
// Now, you have 1 cat and 1 dog. Instantiate their objects and take care of them
// by invoking the takeCare function.
// Add an iguana class, which is a pet.
// How should it respond to bathe(), pet(), eat(), and brush()?
// Write the class and submit the code by 9am Monday.
class Animal {
  constructor(hungry) {
    this._hungry = hungry;
  }

  eat(food) {
    this._hungry -= food;
  }

  bathe() {
    this.makeNoise();
  }

  makeNoise() {
    console.log("some noise");
  }

  get hungry() {
    return this._hungry;
  }

  tick() {
    this._hungry++;
  }
}

class Pet extends Animal {
  constructor(hungry) {
    super(hungry);
    this._angry = 0;
  }

  bathe() {
    this.makeNoise();
    this._angry++;
  }

  pet() {
    this._angry--;
  }

  eat(food) {
    super.eat(food);
    this._angry--;
  }

  brush() {}
}

class Cat extends Pet {
  constructor(hungry) {
    super(hungry);
    this.angry = 0;
  }

  eat(food) {
    super.eat(food);
    console.log("Cat is full.");
  }

  bathe() {
    this.makeNoise();
    this._angry++;
  }

  makeNoise() {
    if (this._angry > 0) {
      console.log("Meow...");
    } else {
      console.log(this._hungry <= 0 ? "Purr..." : "Meow");
    }
  }

  brush() {
    console.log("Scratch");
    this._angry++;
  }
}

class Dog extends Pet {
  constructor(hungry) {
    super(hungry);
    this.angry = 0;
  }

  eat(food) {
    super.eat(food);
    console.log("Dog is full.");
  }

  bathe() {
    this.makeNoise();
    this._angry--;
  }

  makeNoise() {
    if (this._angry > 0) {
      console.log("Bark...");
    } else {
      console.log(this._hungry <= 0 ? "Bark..." : "Wine");
    }
  }

  brush() {
    console.log("Wags tail");
    this._angry--;
  }
}

class Iguana extends Pet {
  constructor(hungry) {
    super(hungry);
    this.angry = 0;
  }

  eat(food) {
    super.eat(food);
    console.log("Licks its lips.");
  }

  bathe() {
    this.makeNoise();
  }

  makeNoise() {
    console.log(this._hungry <= 0 ? "Bask on heat rock..." : "Whips Tail");
  }
  pet() {
    this._angry--;
  }

  brush() {
    console.log("Hiss...");
    this._angry++;
  }
}

function takeCare(pet) {
  const rounds = 7;
  let round = 0;
  while (++round <= 7) {
    if (pet.hungry > 0) {
      pet.eat(pet.hungry);
    }

    if (round % 7 === 0) {
      pet.bathe();
    }

    if (round % 2 === 0) {
      pet.brush();
    }
  }
  pet.tick();
}

const cat = new Cat(1);
const dog = new Dog(1);
const iguana = new Iguana(1);
takeCare(cat);
takeCare(dog);
takeCare(iguana);
