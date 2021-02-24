// 1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

// ```js

function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise Resolved!'), 1000);
  });
}

let data = promise().then((value) => console.log(value));
// // Your code
// ```

// 2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

// ```js
// // Your code
let promissReject = new Promise((res, rej) => {
  rej('Rejected Promise!');
}).catch((error) => console.log(error));

// ```

// 3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log messgae `Promise Settled!`.

// ```js
// // Your code
let promiseReject = new Promise((res, rej) => {
  setTimeout(() => rej('Rejected Promise!'));
})
  .catch((error) => console.log(error))
  .finally(() => console.log(`Promise Settled!`));
// ```

// 4. What will be the output of the code below.

// ```js
console.log('A');

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0);

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D');

// output is
// A
// C
//D
//B

// ```

// 5. This challenge we'll chain promises together using `.then` Create two variables: `firstPromise` and `secondPromise`.

// Set `secondPromise` to be a promise that resolves to "Second!". Set `firstPromise` to be a promise that resolves to `secondPromise`. Call the firstPromise with a `.then`, which will return the secondPromise promise. Then print the contents of the promise after it has been resolved by passing `console.log` to `.then

// ```js

let secondPromise = new Promise((res, rej) => {
  res('second!');
});
let firstPromise = new Promise((res, rej) => {
  res(secondPromise);
}).then((value) => console.log(value));

// // Your code goes here
// ```

// 6. Write a funtion named `wait` that accepts `time` in ms and executes the function after the given time.

function wait(time) {
  return new Promise((res, rej) => {
    setTimeout(() => res('I am wait'), time);
  });
}
