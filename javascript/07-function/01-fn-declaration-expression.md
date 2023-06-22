# Function Declaration.

- Declaraing the function in a noraml way using function keyword and the function name is called Function Declaration , it is also called function statement .

  ```js
  function sum(first, second) {
    console.log(first + second);
  }
  ```

# Function Expression.

- When We store a function inside a variable it is called function expression.

- Major difference between function declaration and function expression is that the first one is hoisted so we can call it before it being defined whereas second one is not hoisted so when we call it it will give us error.

```js
const sum = function (first, second) {
  console.log(first + second);
};
```

# Anonymous Function.

- Function without having a proper name is called Anonymous function. It is majorly used in function expression and callback to a function.


When to use IFFE