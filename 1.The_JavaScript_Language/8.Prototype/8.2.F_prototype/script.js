// Task 1: Changing "prototype"
{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();

  alert(rabbit.eats); // true
}

{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();

  Rabbit.prototype = {};

  alert(rabbit.eats); // ? => true
}

{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();

  Rabbit.prototype.eats = false;

  alert(rabbit.eats); // ? => false
}

{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();

  delete rabbit.eats;

  alert(rabbit.eats); // ? => true
}

{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();

  delete Rabbit.prototype.eats;

  alert(rabbit.eats); // ? => undefined
}

// Task 2: Create an object with the same constructor
{
  function ObjectCreator() {}

  let obj = new ObjectCreator();
  let obj2 = new obj.constructor();

  ObjectCreator.prototype = {};
}
