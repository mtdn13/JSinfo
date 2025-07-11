// function Clock({ template }) {
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   this.stop = function () {
//     clearInterval(timer);
//   };

//   this.start = function () {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }

// let clock = new Clock({ template: "h:m:s" });

{
  class Clock {
    constructor({ template }) {
      this.template = template;
      Object.defineProperty(this, "_timer", {
        value: null,
        writable: true,
      });
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
      clearInterval(this._timer);
    }

    start() {
      this.render();
      this._timer = setInterval(() => this.render(), 1000);
    }
  }

  let clock = new Clock({ template: "h:m:s" });

  console.log(clock);
  clock.start();
  setTimeout(() => clock.stop(), 3000);
}
