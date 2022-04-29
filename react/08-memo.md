## Memo

- What Pure Components Do with classbased Component , memo do the same thing with functional based component .

- for exporing a component use React.memo(), So that Based on the comparison of state and props rendering happens.

- https://codesandbox.io/s/laughing-bush-tc6grk?file=/src/App.js

- Here You can see in Child we have used React.memo so it is being rendered only once , but Child1 is not Using React.memo so it is being rendered every two second.
