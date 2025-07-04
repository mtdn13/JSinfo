// Task 5: Create a tree frome the object
let data = {
  Fish: {
    trout: {},
    salmon: {},
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

function createTree(container, data) {
  if (Object.keys(data).length == 0) return;
  let ul = document.createElement("ul");
  for (let [key, value] of Object.entries(data)) {
    let li = document.createElement("li");
    li.textContent = key;
    ul.append(li);
    createTree(li, value);
  }
  container.append(ul);
}

createTree(document.getElementById("container"), data);
