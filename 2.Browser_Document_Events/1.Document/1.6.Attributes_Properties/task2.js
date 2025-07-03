let links = document.querySelectorAll("li a");
for (let link of links) {
  if (
    link.getAttribute("href").includes("://") &&
    !link.getAttribute("href").startsWith("http://internal.com")
  ) {
    link.setAttribute("style", "color: orange");
  }
}
