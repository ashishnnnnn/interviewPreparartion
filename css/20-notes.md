---
- Making display none and then back to display block , will do the operation on DOM, because display none will remove the element from dom.

- So we can use visibilty hidden , which doesn't do any DOM operation .
---

**Finding Css Elements**

- **getElementById()** - This will return a single node with the correspondng Id .

- **getElementsByClassName** - This will return an array of nodes with corresponding className.

- **querySelector()** - This method return the first element that matches the specified selectors .

- **querySelectorAll()** - This method is completely the same as the querySelector() except that it returns all elements that fit the CSS Selector.
