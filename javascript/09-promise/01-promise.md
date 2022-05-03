# Promise .

- Promise are the way to handle asynchronus task in javascript.

- The executor of promise will make a promise object whose has two keys

  - state - which will be pending initially . It will change to fullfilled or rejected based

  - result - which will undefined initally.

```js
let promise = new Promise(function (resolve, reject) {
  // executor
});
```

- **Note**

- In Executator resolve or reject can be called only once.

```js
let promise = new Promise(function (resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});
```

# .then

- the callbacks of .then will run when the promise got resolve or rejected .

```js
let promise = new Promise(function (resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});
```

- The first argument of .then is a function that runs when the promise is resolved, and receives the result.

- The second argument of .then is a function that runs when the promise is rejected, and receives the error.

# .catch

- The callback of .catch will run once the promise got rejected.

- The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand.

# .finally

- The call .finally(f) is similar to .then(f, f) in the sense that f always runs when the promise is settled: be it resolve or reject.

```js
new Promise((resolve, reject) => {
  /* do something that takes time, and then call resolve/reject */
})
  // runs when the promise is settled, doesn't matter successfully or not
  .finally(() => stop loading indicator)
  // so the loading indicator is always stopped before we process the result/error
  .then(result => show result, err => show error)
```

- A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. That’s all right, as our task is usually to perform “general” finalizing procedures.

## Promise Chaining.

- .then , .catch , .finally do return promise.

- The callback of .catch will run only when there is an error.

- The callback of .finally will always run

```js
console.log(1);
const promise = new Promise((resolve) => {
  console.log(2);
  resolve();
  console.log(3);
});

console.log(4);

promise
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  })
  .catch(() => {
    console.log("Catch");
  })
  .then(() => {
    console.log("Then");
  });

console.log(7);

setTimeout(() => {
  console.log(8);
}, 10);

setTimeout(() => {
  console.log(9);
}, 0);
```

- Output is - 1,2,3,4,7,5,6,Then,9,8
