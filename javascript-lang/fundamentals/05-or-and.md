## OR "||" finds the first truthy value

- The OR || operator does the following:
    - Evaluates operands from left to right.
    - For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
    - If all operands have been evaluated (i.e. all were false), returns the last operand.

- **This leads to some interesting usage compared to a “pure, classical, boolean-only OR”.**
    1. Getting the first truthy value from a list of variables or expressions.
        - For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values).

        - Let’s use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set):
        - 
        ```js
        let firstName = "";
        let lastName = "";
        let nickName = "SuperCoder";

        alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
        ```
        - If all variables were falsy, "Anonymous" would show up.
    2. Short-circuit evaluation.
        - Another feature of OR || operator is the so-called “short-circuit” evaluation.

        - It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

        - The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

        - In the example below, only the second message is printed:
        ```js
        true || alert("not printed");
        false || alert("printed");
        ```
        - In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

        - Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.



## AND “&&” finds the first falsy value
The AND && operator does the following:

- Evaluates operands from left to right.
- For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
- If all operands have been evaluated (i.e. all were truthy), returns the last operand.


```js
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
```

**Note-Precedence of AND && is higher than OR ||**
- The precedence of AND && operator is higher than OR ||.
- So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).