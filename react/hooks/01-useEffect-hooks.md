-> The Effect Hook lets you perform side effects in function components:

-> https://dmitripavlutin.com/react-useeffect-explanation/

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

-> This snippet is based on the counter example from the previous page, but we added a new feature to it: we set the document title to a custom message including the number of clicks.

-> Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. 

-> There are two common kinds of side effects in React components: those that don’t require cleanup, and those that do.



##
```js
useEffect(() => {
    // Setup Code
  	const connection = createConnection(serverUrl, roomId);
    connection.connect();
  	return () => {
      //cleanup code
      connection.disconnect();
  	};
  }, [serverUrl, roomId]); //list of dependencies
```

- Your setup code runs when your component is added to the page (mounts).

- After every re-render of your component where the dependencies have changed:

    - First, your cleanup code runs with the old props and state.
    - Then, your setup code runs with the new props and state.

- Your cleanup code runs one final time after your component is removed from the page (unmounts).

-For Ex - https://codesandbox.io/s/silly-tu-jw4bzc

# Cleanup function also reudce the unnecesseary load on browser.

```js

import { useState, useEffect } from 'react';

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('pointermove', handleMove);
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, []);

  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity: 0.6,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
  );
}

```

So here when the cursor move due to event listner the state chnages. Now if we won't reomve the previous event listner the it will 
increase load on our computer.


-> Race Around condition in useEffect - https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect

-> Simple Counter .

```js
import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(c => c + 1); // ✅ Pass a state updater
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); // ✅ Now count is not a dependency

  return <h1>{count}</h1>;
}
```

-> Now when we don't cleanup, i have seen that number increase by two time , every second. Reason Not cleared yet.



- https://codesandbox.io/s/beating-async-race-conditions-in-react-cleanupfn-45hlu?file=/src/DataDisplayer.js (Handle race around condition)

```js
useEffect(() => {
    let isMounted = true;

    fetchData().then(response => {
      // Check if component is still mounted before updating state
      if (isMounted) {
        setData(response);
      }
    });

    return () => {
      // Cleanup function to handle unmounting
      isMounted = false;
    };
  }, []);
  ```