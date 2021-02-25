// Create four promises that resolves after 1, 2, 3 and 4 seconds with a random value. Using Promise.all log the value of each promises that it resolved with.
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, Math.random());
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, Math.random());
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, Math.random());
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, Math.random());
});

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  values.forEach((e) => console.log(e));
});

// Create a list of 5 github usernames in an array and using Promise.all get access to the data of each user from github api. Log the number of followes of each users.

let usersArr = ['ravindra-me', 'artikgupta', 'akuma392'];

let arr = Promise.all(
  usersArr.map((user) =>
    fetch(`https://api.github.com/users/${user}`)
      .then((data) => data.json())
      .then((data) => console.log(data.followers))
  )
);

// Use Promise.race to see which API resolves faster from the given list of urls. Log the object you get from the promise that is resolved faster.

//random.dog/woof.json
//aws.random.cat/meow

let promise6 = fetch('https://random.dog/woof.json').then((data) =>
  data.json()
);
let promise5 = fetch('https://aws.random.cat/meow').then((data) => data.json());
// console.log({ promise5, promise6 });

Promise.race([promise5, promise6]).then((value) => console.log(value));

// Use Promise.allSettled to log the value of each promise from the given list of promises. And also check if Promise.all works with one, two and three or not

const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

Promise.allSettled(
  [one, two, three].forEach((e) => e.then((value) => console.log(value)))
);
// What will be the output of the following code snippet? How much time will it take for the promise to resolve.
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then((value) => console.log(value)); //['Arya', 'Sam' , {name: 'John}]
