// Task 2: What's in the nodeType
/* 
<html>
<body>
  <script> ==> script (1 - element type)
    alert(document.body.lastChild.nodeType);
  </script>
</body>
</html>
*/

// Task3: Tag in comment
/*
<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // what's here? ==> "BODY"
</script>
*/

// Task 4: Where's the "document" in the hierarchy?
// Which class does the document belong to? ==> HTMLDocument class
// What’s its place in the DOM hierarchy? ==> child to Document class
// Does it inherit from Node or Element, or maybe HTMLElement? ==> inherit from Node
