// Task 1: Pseudo-random generator
function* pseudoRandom(seed) {
  let currentValue = (seed * 16807) % 2147483647;

  while (true) {
    yield currentValue;
    currentValue = (currentValue * 16807) % 2147483647;
  }
}

let generator = pseudoRandom(1);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
