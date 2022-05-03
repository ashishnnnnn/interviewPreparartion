# Question - 4

```js
for (var i = 0; i < 5; i++) {
  (function hello() {
    var j = i;
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  })();
}
```

# Question - 5

- Private Variable with closure .

```js
function private() {
  let _private_variable = 0;

  function increment() {
    _private_variable += 1;
  }

  function reterive() {
    return "Your variable is " + _private_variable;
  }

  return {
    increment,
    reterive,
  };
}

let c = private();
console.log(c.reterive());
c.increment();
console.log(c.reterive());
```

# Question - 6

- Make function called once .

```js
function call_at_once() {
  let count = 0;
  return () => {
    if (count > 0) {
      console.log("Already Suscribed");
    } else {
      count++;
      console.log("Suscribed");
    }
  };
}

let suscribe_btn = call_at_once();

suscribe_btn();
suscribe_btn();
suscribe_btn();
suscribe_btn();
```

# Question - 7

- Memoize

```js
function fib(num, memoize = []) {
  if (memoize[num] !== undefined) {
    return memoize[num];
  } else {
    if (num <= 2) {
      return 1;
    } else {
      let result = fib(num - 1, memoize) + fib(num - 2, memoize);
      memoize[num] = result;
      return result;
    }
  }
}

console.time(10);
console.log(fib(10));
console.timeEnd(10);

console.time(8);
console.log(fib(8));
console.timeEnd(8);
```
