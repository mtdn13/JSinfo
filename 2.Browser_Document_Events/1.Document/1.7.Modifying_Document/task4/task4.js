// Task 4: Create a list

function getUserInput() {
  let userInput;
  let userInputArr = [];

  do {
    userInput = prompt("What to add to the list?", "");
    userInput ? userInputArr.push(userInput) : null;
  } while (userInput);

  return userInputArr;
}

function showUserInput(arr) {
  let list = document.getElementById("list");

  arr.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    list.append(li);
  });
}

showUserInput(getUserInput());
