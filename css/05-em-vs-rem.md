# em Vs rem

## em.

- This is a unit which allowed setting font size of an element related to it's parent.

- If a Parent doesn't have font size , it will look for the higher element and utlimately goes to the root , whose font size is 16px default in browser.

- When em is used for properties other than font-size, then the value will be related to element own font size.

- Ex - ".parent {
  font-size: 18px;
  }
  .child {
  font-size: 1.5em;
  padding: 2em 1em;
  }
  " - Here parent font-size will be 18px and child font-size is 18*1.5 which is 27px.
  Here the padding of top and bottom will be 27*2 which is 54px.

- Note - "Here The Componding will work"

## rem

- This is the unit which allow setting the font size of element relative to the root element.

- So that means that, by using the rem unit, the values of parent elements are ignored, and only the value of the root is taken into consideration.

-
