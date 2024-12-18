# 1
**A function can't be rebounded again**
```js
function f() {
  alert(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Pete"} );

f(); // John
```
- Here answer will be John only.

# 2
**Explain output and reason**
```js
function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

alert( bound.test ); // what will be the output? why?
```

Output will be Undefined
Here’s why:

- sayHi.bind(...) Creates a New Function: When you call sayHi.bind({ name: "John" }), it creates a new function (called a "bound function") that has its this permanently set to { name: "John" }. However, this new function is a separate object from sayHi.

- Properties on sayHi Are Not Copied to the Bound Function: When you create a bound function, only the function behavior is bound; properties on the original function (like sayHi.test) do not get copied over to the bound function. Thus, bound doesn’t have a test property, so bound.test is undefined.

