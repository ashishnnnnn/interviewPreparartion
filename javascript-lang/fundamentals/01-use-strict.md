# USE-STRICT

The **"use strict"** directive in JavaScript is a way to enable Strict Mode. It’s essentially a way to opt into a “safer” subset of JavaScript, helping developers avoid common mistakes and enforce cleaner, more predictable code.

What happens if we don't use **USE STRICT** mode
- 1. Accidental Global Variables
    - In sloppy mode, JavaScript will create a global variable if you assign a value to a variable without declaring it. In Strict Mode, this will throw an error instead, helping you catch this common mistake.
        - Without "use strict":
        - 
        ```
           function sloppyFunction() {
                x = 10; // No error, x is created as a global variable (not recommended)
                console.log(x); // Output: 10
            }

            sloppyFunction();
            console.log(x); // Output: 10, x is accessible globally
 
        ``` 
        - With "use strict":
        - ```
            function strictFunction() {
                "use strict";
                x = 10; // ReferenceError: x is not defined
            }

            strictFunction();
        ```
- 2. this Binding in Functions
    - In sloppy mode, if a function is called without an object as its context, this refers to the global object (like window in browsers). In Strict Mode, this will be undefined, helping avoid unintended behavior.
        - Without "use strict":
        - 
        ```
        function sloppyThis() {
            console.log(this); // In sloppy mode, `this` is the global object (window in browsers)
        }

        sloppyThis(); // Output: [object Window] (or global object)

        ```
        - With "use strict"
        - 
        ```
        function strictThis() {
            "use strict";
            console.log(this); // In strict mode, `this` is undefined in a regular function
        }

        strictThis(); // Output: undefined

        ```