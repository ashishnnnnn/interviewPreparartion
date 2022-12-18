-> useReducer is a React Hook that lets you add a reducer to your component.

```js
const [state, dispatch] = useReducer(reducer, initialArg)
```

-> useReducer returns an array with exactly two items:

-> 1). The current state of this state variable, initially set to the initial state you provided.
-> 2). The dispatch function that lets you change it in response to interaction.

-> Below code increases the counter by two , every time it pressed.

```js
import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + action.value
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age',value:2 })
      }}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
```


# Note States are read-only . Don’t modify any objects or arrays in state:

```js
function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // 🚩 Don't mutate an object in state like this:
      state.age = state.age + 1;
      return state;
    }
```

# Instead 
```js
function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // ✅ Instead, return a new object
      return {
        ...state,
        age: state.age + 1
      };
    }
```


**Note - useReducer save us to write more useState which are related to each other.**
**We can use useReducer instead of that and based on what input change we can [pass that information with the help of type and value of dispath**

**Ex - https://codesandbox.io/s/hungry-mahavira-7ssoio**



