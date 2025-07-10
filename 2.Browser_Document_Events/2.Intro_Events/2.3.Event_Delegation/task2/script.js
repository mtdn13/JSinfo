// Task 2: Tree menu

function wrapLiTextNodes(root) {
  for (let li of root.querySelectorAll("li")) {
    for (let node of li.childNodes) {
      if (node instanceof Text && node.textContent.trim()) {
        let span = document.createElement("span");
        span.textContent = node.textContent;
        li.replaceChild(span, node);
      }
    }
  }
}

let rootelem = document.getElementById("tree");
wrapLiTextNodes(rootelem);

rootelem.addEventListener("click", (event) => {
  if (event.target.tagName !== "SPAN") return;

  let li = event.target.closest("li");
  let childUl = li.querySelector("ul");

  if (!childUl) return;

  childUl.hidden = !childUl.hidden;
});
