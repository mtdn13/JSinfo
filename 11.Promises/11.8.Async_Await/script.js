// Task 1: Rewrite using async/await

/* function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); // Error: 404 */

async function loadJson(url) {
  try {
    let response = await fetch(url);
    if (response.status == 200) {
      return await response.json();
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    alert(error);
  }
}

// loadJson("https://javascript.info/no-such-user.json");

// Task 2: Rewrite "rethrow" with async/await

/* class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  });
}

// Ask for a user name until github returns a valid user

function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then((user) => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch((err) => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
} */

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return await response.json();
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  while (true) {
    try {
      let name = prompt("Enter a name?", "iliakan");
      let user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Full name: ${user.name}.`);
      return user;
    } catch (error) {
      if (error instanceof HttpError && error.response.status == 404) {
        alert("No such user, please reenter");
      } else {
        throw error;
      }
    }
  }
}

// demoGithubUser();

//  Task 3: Call async from non-async
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then(alert);
  // ...what should you write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"
}
// f();
