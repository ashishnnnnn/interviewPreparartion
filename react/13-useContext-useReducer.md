# useContext .

- Context provides way to pass data to the component without passing props manually at each level.

- createContext() is used to create the context , whereas useContext() will be used to consume the context in the child components.

- Example 1 of counter - https://stackblitz.com/edit/vitejs-vite-itauar?file=src%2FApp.jsx,src%2FComponents%2FCounter.jsx,src%2FContext%2FCounterContext.jsx,src%2Fmain.jsx,src%2FApp.css&terminal=dev

# useReducer -

- useReducer is used to update the state in react, it is mainly used with useContext to update the values of context.

- like the reduce function of array where we have two parameter, first one is the reduce function and second one is the accumulator

- Similarly useReduce will have two paramter , the reducer function and second one is the state of the context.

- useReducer will return the two values , first is the **new state** and second one is the **dispatch method** used to update the state.

- https://stackblitz.com/edit/react-jr65qd?file=src%2FApp.js

- Now lets understand the flow.

  - To get rid of pop drilling we have got useContext so that state will be avilable to every component.

  - Now there can be more than n number of state so we include them in an object.

  - Now we can define n number of set state function to update that so then we have useReducer.

# useState vs useReducer -

    1.useState can be mostly used where we have string,digit but if we have objects and array we can use useReducer.

    2.if there is 2-3 state transition we can use useState and if there are mutiple state Transition we can use useReducer.
