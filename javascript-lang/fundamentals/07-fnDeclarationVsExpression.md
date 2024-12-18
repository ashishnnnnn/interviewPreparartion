# Function Expression vs Function Declaration
- The more subtle difference is when a function is created by the JavaScript engine.

    - **A Function Expression is created when the execution reaches it and is usable only from that moment.**
        - Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

        - Function Declarations are different.

    - **A Function Declaration can be called earlier than it is defined.**
        - For example, a global Function Declaration is visible in the whole script, no matter where it is.

        - That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

        - And after all Function Declarations are processed, the code is executed. So it has access to these functions.
    - For example, this works:
    ```js
    sayHi("John"); // Hello, John

    function sayHi(name) {
    alert( `Hello, ${name}` );
    }
    ```
    The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it.
    - If it were a Function Expression, then it wouldn’t work:
    ```js
    sayHi("John"); // error!

    let sayHi = function(name) {  // (*) no magic any more
    alert( `Hello, ${name}` );
    };
    ```
    - Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.
    
