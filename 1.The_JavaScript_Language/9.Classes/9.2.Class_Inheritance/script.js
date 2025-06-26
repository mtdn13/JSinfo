// Task 1: Error creating an instance
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// alert(rabbit.name);

// Task 2: Extended clock
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor({ template }, precision) {
    super({ template });
    this.precision = precision;
  }

  start() {
    super.render();
    this.timer = setInterval(() => super.render(), this.precision);
  }
}

let extended = new ExtendedClock({ template: "h:m:s" }, 1000);
extended.start();
setTimeout(() => extended.stop(), 3000);
