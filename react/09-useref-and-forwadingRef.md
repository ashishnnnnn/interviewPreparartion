# useRef -

- Let Suppose we want to count the number of times a state is rendered, how would you do that.

- ref is very similar to state and it persist between the renders of the component .

- **ref does not cause your component to rerender when it change**

- Biggest Use of the ref is to select any html/jsx element in react.

- https://codesandbox.io/s/clever-gould-2upfom?file=/src/App.js

- Forward ref is used to forward the ref to the child component .

![Screenshot from 2022-04-29 11-39-15](https://user-images.githubusercontent.com/40332678/165893122-e91cee34-b299-4901-b7e8-d20965e4eabb.png)

- In React, forward refs are used to pass a ref from a parent component to a child component. This allows the parent component to directly access and manipulate the child component's DOM element or React component instance.

```js
import React, { useRef } from 'react';

const ChildComponent = React.forwardRef((props, ref) => {
  // Use the forwarded ref to access the DOM element
  return <input ref={ref} />;
});

const ParentComponent = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Access the child input element using the ref
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

```