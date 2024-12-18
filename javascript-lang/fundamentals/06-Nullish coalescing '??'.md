# Nullish coalescing operator '??'
- The nullish coalescing operator (??) in JavaScript is used to provide a default value when a variable is either null or undefined. It’s particularly useful for handling cases where you want to set a default only if the value is truly missing (i.e., null or undefined), without accidentally treating other "falsy" values as missing.

## Why Use ?? Instead of ||?
- In JavaScript, the || (logical OR) operator is often used for default values. However, || treats any falsy value (like 0, "", false, or NaN) as missing, which can lead to unintended behavior when you specifically only want to check for null or undefined.

- The ?? operator, on the other hand, only checks for null or undefined and ignores other falsy values, allowing those to pass through.

Example
```js
let username = null;
let displayName = username ?? "Guest"; // "Guest" because username is null

console.log(displayName); // Output: "Guest"
```

```js
let count = 0;

let result1 = count || 10;  // 10 because 0 is treated as falsy with ||
let result2 = count ?? 10;  // 0 because ?? only checks for null or undefined

console.log(result1); // Output: 10
console.log(result2); // Output: 0
```