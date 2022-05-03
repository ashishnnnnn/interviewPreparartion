# Closure Example -

- Closure give the inner function access to the outer function .

```js
function hello() {
  let ret = 5;
  return () => {
    return ret;
  };
}

let k = hello();

console.log(k());
```

- Every Closure has 3 scope -

  - Local Scope
  - Parent's Scope
  - Global Scope

## Question - 1

```js
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();
// Output - 1,0
```

- As let is block scope , so count in if block is 1 and other count will print 0.

## Question - 2

```js
const createBase = (a) => (b) => a + b;
const addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));
```

## Closure gives us optimization-

```js
function base() {
  let arr = [];
  for (let i = 0; i < 100000; i++) {
    arr[i] = i * i;
  }
  return (index) => {
    return arr[index];
  };
}

const first = base();

console.time(6);
console.log(first(6));
console.timeEnd(6);

console.time(12);
console.log(first(12));
console.timeEnd(12);
```

- Here in the above function the big task is once done and sotred and the later function will simply return the index .
