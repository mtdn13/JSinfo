// Task 1: Filter unique array members
function unique(arr) {
  let set = new Set(arr);
  return Array.from(set);
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare, Krishna, :-O

// Task 2: Filter anagrams
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();

  arr.forEach((item) => {
    map.set(sortString(item), item);
  });

  return Array.from(map.values());
}

function sortString(str) {
  let sortedArr = Array.from(str.toLowerCase()).sort((a, b) =>
    a.localeCompare(b)
  );
  return sortedArr.join("");
}

console.log(aclean(arr));

// Task 3: Iterable keys
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
