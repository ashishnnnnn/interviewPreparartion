# Grid .

- To create a basic grid you can define a grid with three column tracks, two row tracks and a 10 pixel gap between the tracks as follows.

  ".container {
  display: grid;
  grid-template-columns: 5em 100px 30%;
  grid-template-rows: 200px auto;
  gap: 10px;
  }"

- **fr Unit**

- The fr unit works in a similar way to using flex: auto in flexbox. It distributes space after the items have been laid out. Therefore to have three columns which all get the same share of available space:

  ".container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  }
  "

- To have a component with a fixed size element and the second track taking up whatever space is left, you can use as a tracklisting of grid-template-columns: 200px 1fr.

- **minmax() function**

  - This function means that you can set a minimum and a maximum size for a track. This can be quite useful. If we take the example of the fr unit above which distributes remaining space, it could be written out using minmax() as minmax(auto, 1fr). Grid looks at the intrinsic size of the content, then distributes available space after giving the content enough room. This means that you might not get tracks that each have an equal share of all space available in the grid container.

- **auto-fill and auto-fit**

- Both will work mostly in the same way i.e, that is fit as many column as possible with specified width. With minmax as many column with minimum width 100px to 1fr.

- They will differ when children have less width as compred to avilable space. At that point auto-fill will take width with bare minimum to fit into, where as auto-fit will fit the whole container .

https://codesandbox.io/s/focused-meadow-11t2uu?file=/src/styles.css
