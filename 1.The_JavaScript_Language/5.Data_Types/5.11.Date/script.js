// Task 1: Create a date
let date = new Date("2012-02-20T03:12");
console.log(date);

// Task 2: Show a weekday
function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}

console.log(getWeekDay(new Date(2012, 0, 3)));

// Task 3: European weekday
function getLocalDay(date) {
  return date.getDay() === 0 ? 7 : date.getDay();
}

console.log(getLocalDay(new Date(2012, 0, 3)));

// Task 4: Which day of the month was many days ago?
function getDateAgo(date, days) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - days
  ).getDate();
}

let exmpl = new Date(2015, 0, 2);
console.log(getDateAgo(exmpl, 1));
console.log(getDateAgo(exmpl, 2));
console.log(getDateAgo(exmpl, 365));

// Task 5: Last day of the month?
function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2012, 1));

// Task 6: How many seconds passed today
function getSecondsToday() {
  let today = new Date();
  let todayStart = new Date(today);
  todayStart.setHours(0, 0, 0, 0);
  return Math.floor((today - todayStart) / 1000);
}

console.log(getSecondsToday());

// Task 7: How many seconds till tomorrow
function getSecondsToTomorrow() {
  let today = new Date();
  let tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1,
    0,
    0,
    0,
    0
  );
  return Math.floor((tomorrow - today) / 1000);
}

console.log(getSecondsToTomorrow());

// Task 8: Format the relative date
function formatDate(date) {
  let now = new Date();
  if (now - date < 1000) {
    return "right now";
  } else if (now - date < 60000) {
    return `${Math.floor((now - date) / 1000)} sec. ago`;
  } else if (now - date < 3600000) {
    return `${Math.floor((now - date) / 60000)} min. ago`;
  } else {
    return `${date.getDate()}.${date.getMonth() + 1}.${date
      .getFullYear()
      .toString()
      .slice(2)} ${date.getHours()}:${date.getMinutes()}`;
  }
}

console.log(formatDate(new Date(new Date() - 1))); // "right now"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

console.log(formatDate(new Date(new Date() - 86400 * 1000))); // yesterday
