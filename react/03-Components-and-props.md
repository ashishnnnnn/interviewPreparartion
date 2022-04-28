# Components-and-Props.

- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation

- Function and Class Components -

- ```
   function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
   }
  ```

- This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

- ```
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  ```

**Note**-
**Props are read only**

        - Whether you declare a component as a function or a class, it must never modify its own props

## Questions -

### Question - 1 - When to use a Class Component over a Function Component?

- If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component. _So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries _

### Question - 2 - What is state in react.

- State in react is an object which hold some information and that can be change based on the user interactivity . We should use as minimum state as possible in react.

- State of a component is complietly private to itself only and it can be passed as props to another child components .

### Question - 3 - What is Props in React.

- Props are the input to the Components . They are mainly an object which will have several value.

- Props have mainly some data to show in the components , or some state or the function to update some state.

### Question - 4 - What is the difference between state and props?

- Both Props and State are javascript Object, Both will have the information which will affect the rendering. But they are different with respect to functionality in the components. Props get passed to Components similar to function parameters whereas State is
  managed within the components similar to the Variable inside a function .
