// Task 6: Show descendants in a tree

let lis = document.getElementsByTagName("li");

for (let li of lis) {
  let descendantsCount = li.getElementsByTagName("li").length;
  console.dir(descendantsCount);
  if (!descendantsCount) continue;

  li.firstChild.data += " [" + descendantsCount + "]";
}
