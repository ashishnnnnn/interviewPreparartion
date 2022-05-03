# Promise.race()

- This will wait for the first promise to get completed and then it will return whether it is resolved or rejected.

```js
const fakeFetch = (value, delay, isreject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isreject) {
        reject("Reject Hoogaya Kya kare");
      } else {
        resolve(value);
      }
    }, delay * 1000);
  });
};

let array_of_promise = [
  fakeFetch("nancy", 2, false),
  fakeFetch("Ashish", 1, false),
  3,
  4,
  5,
];

const myPromiseRace = (array_of_promise) => {
  return new Promise((resolve, reject) => {
    array_of_promise.forEach(async (promise) => {
      try {
        let ret_promise = await Promise.resolve(promise);
        resolve(ret_promise);
      } catch {
        reject("Error aa gaya");
      }
    });
  });
};

Promise.race(array_of_promise).then((data) => {
  console.log(data);
});

myPromiseRace(array_of_promise).then((data) => {
  console.log(data);
});
```
