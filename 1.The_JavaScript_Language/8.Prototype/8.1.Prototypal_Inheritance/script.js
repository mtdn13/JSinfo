// Task 1: Working with prototypes
{
  let animal = {
    jumps: null,
  };
  let rabbit = {
    __proto__: animal,
    jumps: true,
  };

  alert(rabbit.jumps); // ? (1) => true

  delete rabbit.jumps;

  alert(rabbit.jumps); // ? (2) => null

  delete animal.jumps;

  alert(rabbit.jumps); // ? (3) => undefined
}

// Task 2: Searching algorithm
{
  let head = {
    glasses: 1,
  };

  let table = {
    pen: 3,
  };

  let bed = {
    sheet: 1,
    pillow: 2,
  };

  let pockets = {
    money: 2000,
  };
  pockets.__proto__ = bed;
  bed.__proto__ = table;
  table.__proto__ = head;
}

// Task 3: Where does it write?
{
  let animal = {
    eat() {
      this.full = true;
    },
  };

  let rabbit = {
    __proto__: animal,
  };

  rabbit.eat(); // => rabbit.full === true;
}

// Task 4: Why are both hamsters full?
{
  let hamster = {
    eat(food) {
      this.stomach.push(food);
    },
  };

  let speedy = {
    stomach: [],
    __proto__: hamster,
  };

  let lazy = {
    stomach: [],
    __proto__: hamster,
  };

  // This one found the food
  speedy.eat("apple");
  alert(speedy.stomach); // apple

  // This one also has it, why? fix please.
  alert(lazy.stomach); // apple
}
