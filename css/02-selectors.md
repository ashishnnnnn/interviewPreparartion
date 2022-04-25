## Selectors

- Selectors are Used to select Html element , so that CSS propert can be applied on them.

---

### Simple Selectors

#### Universal Selectors.

- Universal Selector (\*) is used to select all the HTML elements and give them a specific Style . For Ex- If we give Color-PINK , the color will be applied to all of HTML elements.

#### Type Selectors.

- A type Selectors Matches HTML directly. Like all the DIV, all the P element etc.

#### Class Selectors.

- It will select all those elements who has the specific class . Ex - (.company) will select all the element with class name as company.

#### Id Selectors.

- It will select the elemets who has the specific ID.

## Complex-Selectors

### Decentent Selectors (" ")

- A descendant combinator allows us to target a child element. This uses a space ( ) to instruct the browser to look for child elements.

Ex - "p strong {
color: blue;
}
"

- This snippet selects all **strong** elements that are child elements of **p** elements only, making them blue recursively.

### Child Selector (">")

- Child selectors is used to select all the child of a specific parent. It does select only the first level of child .Like it does not select grand child.

**Note** - The Child Combinator (>) only selects those HTML Elements that are direct children of a specified element. While the Descendant Combinator selects all HTML Elements that are either children, grandchildren, great grandchildren and so on

### Adjacent Sibling Selector (+)

- Adjacent selector will select the just next sibling of a particular element.
  For ex - div + p. This will select only those paragraph who are just next to div element.

### General Sibling Selector (~)

- The general sibling selector selects all elements that are next siblings of a specified element.

- The following example selects all <p> elements that are next siblings of <div> elements:
