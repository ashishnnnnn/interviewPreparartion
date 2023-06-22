# Promise.All

- Let’s say we want many promises to execute in parallel and wait until all of them are ready.

```js
let promise = Promise.all(iterable);
```

- Promise.all takes an iterable (usually, an array of promises) and returns a new promise.

- The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.

- **If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.**

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

const myPromiseAll = (array_of_promise) => {
  return new Promise((resolve, reject) => {
    let ret_array = [];
    let completed_promise = 0;
    array_of_promise.forEach(async (promise, index) => {
      try {
        let ret_promise = await Promise.resolve(promise);
        completed_promise++;
        ret_array[index] = ret_promise;
        if (completed_promise === array_of_promise.length) {
          resolve(ret_array);
        }
      } catch {
        reject("Error aa gaya");
      }
    });
  });
};

let array_of_promise = [
  fakeFetch("nancy", 2, false),
  fakeFetch("Ashish", 1, false),
  3,
  4,
  5,
];

myPromiseAll(array_of_promise).then((data) => {
  data.forEach((val) => console.log(val));
});
```


```js
function PromiseAll(promises){
    return new Promise(function(resolve,reject){
        let retArray = []
        let completed = 0;
        promises.forEach(function(ele,idx){
            ele.then(function(data){
                retArray[idx] = data;
                completed+=1;
                if(completed===promises.length){
                    resolve(retArray)
                }
            }).catch((err)=>{
                reject(err)
            })
        });
    })
}
```