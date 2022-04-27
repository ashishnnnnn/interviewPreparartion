## Question-1

- **Possible Ways of Defining CSS**

  - Inline Css - Which We write in style attribute of Element Itself.

  - Internal Css - Which We write in Head of the element in Style Tag.

  - External Css - Which We write with the help of any Css File.

## Question-2

- **Difference between nth-child() and nth-of-child()**

  - nth-child() is used to detect the nth child of a particular parent.

  - ```
      .example :nth-child(5) { background: #ffdb3a; }
    ```

  - ```
      <div class="example">
        <p>This is a <em>paragraph</em>.</p>
        <p>This is a <em>paragraph</em>.</p>
        <p>This is a <em>paragraph</em>.</p>
        <div>This is a <em>divider</em>.</div>
        <div>This is a <em>divider</em>.</div> <!-- Element to select -->
        <p>This is a <em>paragraph</em>.</p>
        <p>This is a <em>paragraph</em>.</p>
        <div>This is a <em>divider</em>.</div>
        <p>This is a <em>paragraph</em>.</p>
        <div>This is a <em>divider</em>.</div>
      </div>
    ```

- So this will select the 5th child of exmaple div.

- nth-of-type() is used to match nth child of a particular type of a parent.

  ```
  .example p:nth-of-type(odd) { background: #ffdb3a; }
  ```

  ```
      <div class="example">
      <p>This is a <em>paragraph</em>.</p> <!-- Element to select -->
      <p>This is a <em>paragraph</em>.</p>
      <p>This is a <em>paragraph</em>.</p> <!-- Element to select -->
      <div>This is a <em>divider</em>.</div>
      <div>This is a <em>divider</em>.</div>
      <p>This is a <em>paragraph</em>.</p>
      <p>This is a <em>paragraph</em>.</p> <!-- Element to select -->
      <div>This is a <em>divider</em>.</div>
      <p>This is a <em>paragraph</em>.</p>
      <div>This is a <em>divider</em>.</div>
    </div>
  ```

- So it will select every odd p tag.

## Question - 3

- **Difference Between Visisbility Hidden and display None**

  - visibilty: hidden will simply hide the element but doesn't bring out of dom flow.

  - display-none: will delete the element from dom also.So it will cause Dom reflow(Which is costly operation)

## Question - 4

- **Difference between max-width and min-width**

  - max-width: means maximum width can be this much but lesser is also accepted.

  - min-width: means minimum width can be this much but greatter is also accepted.

## Question - 5

- **Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa?**

  - translate() is a value of CSS transform. Changing transform or opacity does not trigger browser reflow or repaint but does trigger compositions; whereas changing the absolute positioning triggers reflow .

## Question - 6

- **What is mobile-first? Can you explain the difference between coding a website to be responsive versus using a mobile-first strategy?**

- Mobile first view means when we start building site, we mainly focus on the mobile view first and then consider about bigger screen .

- ```
    @media (min-width: 601px) {
      .my-class {
        font-size: 24px;
      }
    }
    @media (max-width: 600px) {
      .my-class {
        font-size: 12px;
      }
    }
  ```

## Question - 7

- **Q. What is DOM reflow?**

- Reflow is the name of the web browser process for re-calculating the positions and geometries of elements in the document, for the purpose of re-rendering part or all of the document.

- Reflow Occurs When---

  - insert, remove or update an element in the DOM

  - modify content on the page, e.g. the text in an input box

  - move a DOM element
