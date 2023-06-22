# Rendering Element .

- Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

- In index html we have an element with id = "root", everything is rendered in that only.

- React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.


# Recoincillation 

Recoincillation is the process by which react update the dom if there any changed done it , by user interaction or whatsoever.

- Here React use Virtual Dom which is just an Blueprint of actual dom , chaanging the Virtual Dom will lot affet the DOM by itself.

- So We have Diffing - in this algorithim React DOM check the Prevoously Virtual DOM with current VIRTUAL Dom and if there any changes In the DOM , it makes sure it reflect those changes on Actual DOM also.

- React USE Key prop for better optimization over re - rendering 

- https://betterprogramming.pub/understand-keys-virtual-dom-reconciliation-and-diffing-in-react-e65a9bee316f (Recoincillation)

- https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318 (Why we should not use Index as key in react)

- https://dev.to/shiv1998/why-not-to-use-index-as-key-in-react-lists-practical-example-3e66 (Why we should not use Index as key in react)
