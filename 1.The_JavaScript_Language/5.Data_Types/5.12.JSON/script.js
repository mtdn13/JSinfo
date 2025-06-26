// Task 1: Turn the object into JSON and back
let user = {
  name: "John Smith",
  age: 35,
};

user = JSON.stringify(user);

let user2 = JSON.parse(user);

console.log(user2);

// Task 2: Exclude backreferences
let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    if (key == "self") {
      return undefined;
    } else if (key == "occupiedBy" && !Array.isArray(value)) {
      return undefined;
    }
    return value;
  })
);

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
