# First Class Function .

- First class function in javascript refers to a concept that function can be treated as variable in the javascript, means can be passed as parameter to any function , can be a returned value for a function.

# IIFE -

- **Immediately Invoked Function Expression**

- This function immediatedly got called when javascript executes the code , line - by -line.

  ```js
  (function (x) {
    return (function (y) {
      console.log(x);
    })(20);
  })(10); // It will print 10 and this is due to clousure .
  ```

# Closure -

- The bounding of a function with it's lexical variable and function is called closure .

# closure - output - based

```js
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
```

- here the ouput will be 0,1,2,3,4 which will be printed after every 1 sec.This is because let is block scope so for every block scope a new refernce of i will be created which will not get affected by other i.

# Hositing of a function .

- So in Hoisting of a function , function will be totally copied to window execution context or execution context , so when we call that function before declaration it works the same way, where as for var it will give us undefined .

**What is Output of this code**

```js
var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

fun();
```

So here for the inner function also the hosting will happen which will give x as a property of that execution context object and thus the output will be **undefined**

## params-vs-argumnets

```js
function hello(num) {
  console.log(num);
}

hello(4);
// So '4' is argument and 'num' is parameter.
```

- **Arrow function does not have argument keyword defined and for this they refer to the lexical parent**
