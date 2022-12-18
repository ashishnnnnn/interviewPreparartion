-> useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

```js
const cachedValue = useMemo(calculateValue, dependencies)
```

-> To cache a calculation between re-renders, wrap it in a useMemo call at the top level of your component:

```js
import { useMemo } from 'react';

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```

You need to pass two things to useMemo:

    - A calculation function that takes no arguments, like () =>, and returns what you wanted to calculate.

    - A list of dependencies including every value within your component that’s used inside your calculation.

-> On the initial render, the value you’ll get from useMemo will be the result of calling your calculation.

-> On every subsequent render, React will compare the dependencies with the dependencies you passed during the last render. If none of the dependencies have changed (compared with Object.is), useMemo will return the value you already calculated before. Otherwise, React will re-run your calculation and return the new value.

-> In other words, useMemo caches a calculation result between re-renders until its dependencies change.

**Note - useMemo won’t make the first render faster. It only helps you skip unnecessary work on updates.**

Ex - https://codesandbox.io/s/dawn-currying-u91ucl?file=/src/UseMemoEx.js (Code by Me)
