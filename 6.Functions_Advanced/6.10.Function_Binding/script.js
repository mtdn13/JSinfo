// Task 1: Bound function as a method
{
  function f() {
    alert(this); // ? null
  }

  let user = {
    g: f.bind(null),
  };

  user.g();
}
// Task 2: Second bind
{
  function f() {
    alert(this.name);
  }

  f = f.bind({ name: "John" }).bind({ name: "Ann" });

  f();
} // => John

// Task 3: Function property after bind
{
  function sayHi() {
    alert(this.name);
  }
  sayHi.test = 5;

  let bound = sayHi.bind({
    name: "John",
  });

  alert(bound.test);
} // what will be the output? why? undefined => other object is created

// Task 4: Fix a function that loses this
{
  function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
  }

  let user = {
    name: "John",

    loginOk() {
      alert(`${this.name} logged in`);
    },

    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  };

  askPassword(
    () => user.loginOk(),
    () => user.loginFail()
  );
}

// Task 5: Partial  application for login
{
  function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
  }

  let user = {
    name: "John",

    login(result) {
      alert(this.name + (result ? " logged in" : " failed to log in"));
    },
  };

  askPassword(
    () => user.login(true),
    () => user.login(false)
  ); // ?
}
