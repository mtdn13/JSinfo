// Task 8: Colored clock with setInterval

let timerId;

function clockStart() {
  timerId = setInterval(() => {
    let time = new Date();
    document.getElementById("hours").textContent =
      time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    document.getElementById("minutes").textContent =
      time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    document.getElementById("seconds").textContent =
      time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
    document.getElementById("time").style.display = "block";
  }, 1000);
}

function clockStop() {
  clearInterval(timerId);
}
