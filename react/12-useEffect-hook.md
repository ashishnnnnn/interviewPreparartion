## useEffect -

- useEffect let us to do some side affect task without blocking the rendering of the component.

- By sideEffect i mean - Fetching some data, Updating the element using Document etc.

- Now useEffect is the replacement for componentDidMount, componentDidUpdate and componentWillUpdate .

- If we do not pass anything in the dependency array of the useEffect , then the function will run everytime the component get render .

- **Any Function or Anything Written in useEffect will run after component got render**

- We can also implement componentWillUnmount using a return function whihc will run when ever the component goes unmount. This is also called cleanUp function .
