// Task 1: createText vs innerHTML vs textContent
/*
elem.append(document.createTextNode(text)) ==> parse as text
elem.innerHTML = text ==> parse as html
elem.textContent = text ==> parse as text
*/

// Task 3: Why does 'aaa' remain?
/* 
<table id="table">
  aaa
  <tr>
    <td>Test</td>
  </tr>
</table>

<script>
  alert(table); // the table, as it should be

  table.remove();
  // why there's still "aaa" in the document? ==> table.childNode == table.tbody ==> tr ==> td aaa text is not valid html
</script>
*/
