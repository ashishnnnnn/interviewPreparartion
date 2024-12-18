| Feature         | undefined                                           | null                                      |
|-----------------|-----------------------------------------------------|-------------------------------------------|
| Meaning         | Variable declared but not initialized, or a missing value | Intentional absence of any value          |
| Type            | "undefined"                                         | "object"                                  |
| Set by          | JavaScript automatically                            | Explicitly by the programmer              |
| Common Uses     | Default value for undeclared variables or missing properties | Used to represent "no value" explicitly  |


* Variable Declaration and Initialization
```js
let a;
console.log(a); // Output: undefined (a is declared but not initialized)

let b = null;
console.log(b); // Output: null (b is explicitly set to no value)
```

* Function Return Values
```js
function noReturnValue() {}
console.log(noReturnValue()); // Output: undefined (no return statement)

function returnNull() {
  return null;
}
console.log(returnNull()); // Output: null (explicitly returns null)
```

**Summary**
- undefined: Indicates a variable or property hasn’t been assigned a value yet. Generally set automatically by JavaScript.
- null: Represents an intentional “no value” or “empty” value, set explicitly by the programmer.