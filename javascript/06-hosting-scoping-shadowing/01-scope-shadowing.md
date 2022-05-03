## Scope

- Scope is a certain region or the space where a variable is defined and from where it can be accessed .

- Var has a functional scope But let and const have functional scope.

## Shadowing

- As let is block scope so we can override the value of a let inside another block and this is called shadowing.

  ```js
  let a = "hello";
  console.log(a); //hello
  {
    let a = "Jai hoo";
    console.log(a); //Jai hoo -> Shadowed the previous "a"
  }

  console.log(a); // Get back to previous "a".
  ```

- **We Can Shadow a var variable with the let variable but we can't shadow the let variable with the var variable - that is called illegal shadowing and it give us the error**

### legal shadowing

```js
var a = 20;
console.log(a);
{
  let a = 40;
  console.log(a);
}
console.log(a);
```

### illegal Shadowing

```js
let a = 20;
console.log(a);
{
  var a = 40;
  console.log(a);
}
console.log(a);
```
