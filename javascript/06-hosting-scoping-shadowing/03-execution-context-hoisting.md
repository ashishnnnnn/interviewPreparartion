# Execution Context.

- So whenever a function runs in the javascript (even the global) it runs into a execution context. For window function it is global executation context.

- The javascript runs it into 2 major steps

  - First the memory (in the heap) will be allocated for the variable and function and the value asscoiated with them will be undefined.

  - Now javascript runs the code line by line and associate the corresponding value of variable and function.

# Hositing

- So when the javascript starts running the code , it moves the function defination and variables at the top of the scope and this is called hositing.
- For variable only scoping will take place but not value will be assigned , but for function both scoping and it's full body will be assigned.

Here's an example to illustrate the hoisting of a function declaration:
```js
sayHello();

function sayHello() {
  console.log('Hello!');
}
```
In this example, the function sayHello() is called before it is declared. However, because of hoisting, the function declaration is moved to the top of the code, so the code actually runs like this:

```js
function sayHello() {
  console.log('Hello!');
}

sayHello();
```

# Temporaral Dead Zone

- TDZ is the term used to define the state where a variable can not be accessed and they re not yet deined in that space. After the variable got declared then only we can access them.

- Let and Const comes under TDZ. They are also hoisted (script) but due to TDZ they can't accessed before being defined.

# Output-based-question

- Q.1

  ```js
  function abc() {
    console.log(a);
    var a = 20;
  }

  abc();
  // Undefined
  ```

- Q.2

```js
function abc() {
  console.log(a, b, c);
  var a = 20;
  const b = 30;
  let c = 40;
}

abc();
// This will give us error saying b can't be accessed before defined
```

