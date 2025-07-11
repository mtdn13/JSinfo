// Task 1: Why "return false doesn't work"
/* 
<script>
  function handler() {
    alert( "..." );
    return false;
  }
</script>

<a href="https://w3.org" onclick="handler()">the browser will go to w3.org</a> */

// Use function code directly in onclick property , use preventDefault() in handler() function or use return handler() in onclick prop
