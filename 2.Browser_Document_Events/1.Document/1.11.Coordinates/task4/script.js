// Task 4: Position the note inside (absolute)

/**
 * Positions elem relative to anchor as said in position.
 *
 * @param {Node} anchor     Anchor element for positioning
 * @param {string} position One of: top/right/bottom
 * @param {Node} elem       Element to position
 *
 * Both elements: elem and anchor must be in the document
 */
function positionAt(anchor, position, elem) {
  let anchorCoords = anchor.getBoundingClientRect();
  elem.style.position = "absolute";
  switch (position) {
    case "top-out":
      elem.style.top = anchorCoords.y - elem.offsetHeight + "px";
      elem.style.left = anchorCoords.x + "px";
      break;
    case "right-out":
      elem.style.top = anchorCoords.y + "px";
      elem.style.left = anchorCoords.right + "px";
      break;
    case "bottom-out":
      elem.style.top = anchorCoords.y + anchorCoords.height + "px";
      elem.style.left = anchorCoords.x + "px";
      break;
    case "top-in":
      elem.style.top = anchorCoords.y + "px";
      elem.style.left = anchorCoords.x + "px";
      break;
    case "right-in":
      elem.style.top = anchorCoords.y + "px";
      elem.style.left = anchorCoords.right - elem.offsetWidth + "px";
      break;
    case "bottom-in":
      elem.style.top =
        anchorCoords.y + anchorCoords.height - elem.offsetHeight + "px";
      elem.style.left = anchorCoords.x + "px";
      break;
      break;
    default:
      break;
  }
}

/**
 * Shows a note with the given html at the given position
 * relative to the anchor element.
 */
function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top-in", "note top in");
showNote(blockquote, "top-out", "note top out");
showNote(blockquote, "right-out", "note right out");
showNote(blockquote, "right-in", "note right in");
showNote(blockquote, "bottom-in", "note bottom in");
showNote(blockquote, "bottom-out", "note bottom out");
