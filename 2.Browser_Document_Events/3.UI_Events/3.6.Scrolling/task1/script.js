// Task 1: Endless page

document.addEventListener("scroll", () => {
  if (
    window.pageYOffset + window.innerHeight >=
    document.documentElement.scrollHeight - 100
  ) {
    let p = document.createElement("p");
    p.textContent = new Date();
    document.body.append(p);
  }
});
