// Task 1: Store "unread" files
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

// Use set to store ONLY read messages, in this case WeakSet because messages are not moderated by us
let readMessages = new WeakSet();
readMessages.add(messages[0]);

// Task 2: Store read Dates

// Use map to store read messages AND the dates they been read on, using WeakMap with same idea here
let messageLogs = new WeakMap();
messageLogs.set(messages[0], new Date(0));
