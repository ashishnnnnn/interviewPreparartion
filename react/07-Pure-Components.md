# Pure-Component.

- What is Pure-Component.
- What is Impure-Component.
- When Should We use One Over The Another.

---

- Regular Component Does Not Implement ShouldComponentUpdate function and it set that as true by default.

- A Pure Component Does Implement ShouldComponentUpdate and only update the compononents by doing a shallow copy of previous Props and State with Current Props and State.

---

Ex - https://codesandbox.io/s/bold-pond-66o6ov?file=/src/App.js

Here in this Codesandbox We see that after 2 second Regular Component do the console log but the Pure Component Haven't Done that, as the props and state of the component has not changed.

- PureComponent Only Works in the Class Component, But we could achive the same feature using react.memo in functional Component.
