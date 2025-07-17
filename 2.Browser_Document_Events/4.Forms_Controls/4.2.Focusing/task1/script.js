// Task 1: Editable div

document.addEventListener("click", (event) => {
  let div = document.querySelector(".view");

  if (event.target != div) return;

  let textArea = document.createElement("textarea");
  textArea.classList.add("edit");
  textArea.value = div.innerHTML;
  div.replaceWith(textArea);
  textArea.focus();

  textArea.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
      transformBack();
    }
  });

  textArea.addEventListener("blur", transformBack);

  function transformBack() {
    if (!textArea.isConnected) return;

    let div = document.createElement("div");
    div.classList.add("view");
    div.innerHTML = textArea.value;
    textArea.replaceWith(div);
  }
});
