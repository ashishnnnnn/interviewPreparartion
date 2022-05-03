# useMemo

- So useMemo is used for the perfomance Optimization , It do shallow comparison of props and state and if they changes then only this component will rerender .

# useCallback

- Now let suppose some component are only getting any function as props so they will rerender even if we use React.memo , because every time the function renders the new refernce of that function will be created .

- So here comes useCallback which will accepts a dependecy array as one of the paramter , so that when the parameter changes then only the function reference will change.

- useCallback hooks will return a memoized version of a callback function which will only changes when one of the dependecies has changed.

- https://stackblitz.com/edit/react-ajpywc?file=src%2FParent.js

- **useMemo and useCallback hooks are mainly used for performance optimization**
