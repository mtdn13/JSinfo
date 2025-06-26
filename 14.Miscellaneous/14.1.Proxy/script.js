// Task 1: Error on reading non-existing property
let user = {
  name: "John",
};

function wrap(target) {
  return new Proxy(target, {
    get(target, property) {
      return target[property]
        ? Reflect.get(...arguments)
        : new ReferenceError(`Property doesn't exist: ${property}`);
    },
  });
}

user = wrap(user);

// alert(user.name); // John
// alert(user.age); // ReferenceError: Property doesn't exist: "age"

// Task 2: Accessing array[-1]
let array = [1, 2, 3];

array = new Proxy(array, {
  get(array, index) {
    return index >= 0
      ? Reflect.get(...arguments)
      : Reflect.get(array, array.length - Math.abs(index));
  },
});

// alert(array[-1]); // 3
// alert(array[-2]); // 2

// Task 3: Observable
{
  function makeObservable(target) {
    target.observe = function (handler) {
      target._handler = handler;
    };
    return new Proxy(target, {
      set(taret, property, value, receiver) {
        let success = Reflect.set(...arguments);
        if (success) {
          target._handler(property, value);
        }
        return success;
      },
    });
  }

  let user = {};
  user = makeObservable(user);

  user.observe((key, value) => {
    alert(`SET ${key}=${value}`);
  });

  // user.name = "John"; // alerts: SET name=John
  // user.surname = "Wick";
}
