// Task 1: Does a function pickup latest changes?
{
  let name = "John";

  function sayHi() {
    console.log("Hi, " + name);
  }

  name = "Pete";

  sayHi();
} // what will it show: "John" or "Pete"? => Pete

// Task 2: Which variables are available?
{
  function makeWorker() {
    let name = "Pete";

    return function () {
      console.log(name);
    };
  }

  let name = "John";

  // create a function
  let work = makeWorker();

  // call it
  work();
} // what will it show? => Pete

// Task 3: Are counters independent?
{
  function makeCounter() {
    let count = 0;

    return function () {
      return count++;
    };
  }

  let counter = makeCounter();
  let counter2 = makeCounter();

  console.log(counter()); // 0
  console.log(counter()); // 1

  console.log(counter2()); // ? => 0
  console.log(counter2());
} // ? => 1

// Task 4: Counter object
{
  function Counter() {
    let count = 0;

    this.up = function () {
      return ++count;
    };
    this.down = function () {
      return --count;
    };
  }

  let counter = new Counter();

  console.log(counter.up()); // ? => 1
  console.log(counter.up()); // ? => 2
  console.log(counter.down());
} // ? => 1

// Task 5: Function in if
{
  let phrase = "Hello";

  if (true) {
    let user = "John";

    function sayHi() {
      console.log(`${phrase}, ${user}`);
    }
  }

  sayHi();
} // => error

// Task 6: Sum with closures
function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));

// Task 7: Is variable visible?
{
  let x = 1;

  function func() {
    console.log(x); // ? => error

    let x = 2;
  }

  func();
}

// Task 8: Filter through function
{
  let arr = [1, 2, 3, 4, 5, 6, 7];

  function inBetween(a, b) {
    return function (item) {
      return item >= a && item <= b;
    };
  }

  console.log(arr.filter(inBetween(3, 6)));

  function inArray(arr) {
    return (item) => arr.includes(item);
  }

  console.log(arr.filter(inArray([1, 2, 10])));
}

// Task 9: Sort by field
{
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
  ];

  function byField(str) {
    return (a, b) => (a[str] > b[str] ? 1 : -1);
  }

  users.sort(byField("name"));
  console.log(JSON.stringify(users));

  users.sort(byField("age"));
  console.log(JSON.stringify(users));
}

// Task 10: Army of functions
{
  function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
      let k = i;
      let shooter = function () {
        console.log(k);
      };
      shooters.push(shooter);
      i++;
    }

    return shooters;
  }

  let army = makeArmy();
  army[0](); // 10 from the shooter number 0
  army[1](); // 10 from the shooter number 1
  army[2](); // 10 ...and so on.
}
