// Task 3: Which handlers run?

button.addEventListener("click", () => alert("1")); // 1

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2); // 2
