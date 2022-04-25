## Box-Model

- Everything displayed by CSS is a box. Understanding how the CSS Box Model works is therefore a core foundation of CSS.

- Every Box in Html-Css is Responsive By Nature. But when we fix the height and width (Which is called extrensic Sizing) it's responsiveness breaks.

- You can control the size of box by using extrinsic sizing, or, you can continue to let the browser make decisions for you based on the content size, using intrinsic sizing.

---

- Four Part Of Box-Model

- **Content-Box**

  - Content Box Is the Area Where Our Actual Content Lies. This content can control the size of its parent, so is usually the most variably sized area.

- **Padding-Box**

  - Padding Box is the area surrounded by Content Box which is fixed By _Padding_ CSS Property.

  - As Padding is inside the box , So background color which we apply to padding will be visible here also. One More Thing is This area can be taken by the scrollbars when there is any kind of overflow or anything.

- **Border-Box**

  - Border Box is a kind of boundary around padding and its value is specified by _border_ CSS property.

- **Margin-Box**

  - It is the space around our box. It gives gap between diffrenet box and property like Outline and box-shadow will occupy this value .

---

### Block-vs-Inline-vs-Inline-Block

- **Block**

  - Block element will take the full width of parent.
  - It starts in a new line
  - We can set width , height property to it.
  - Padding,Margin value will work in all direction.
  - Ex - Div , P

- **Inline**

  - Inline Element will start next to each other.
  - It Does not take full width of the container.
  - We can set margin and padding values to the left and right side of it.
  - We can't set padding value to top and bottom of it.
  - Setting Width and Height Property on it doesn't work.
  - Ex- <span></span> , <img/> , <a></a>

- **Inline-Block**

  - Inline Block same as Inline just here we can set height and width property to it.
  - It also start to the same line.

---

## Box-Sizing

- content-box - If Box-sizing will be content box means when we set dimension, such as width and height , they will applied to content and all the padding and border will be added to the content size.

- box-sizing - It means the width and height of a container will be fixxed and if we add padding and border the content size will get pushed in to maintain the width of the border.

---
