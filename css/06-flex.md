# Flex .

- The Initial Value Of flex-wrap is no-wrap, it means if there is not enough space in the container then the items will overflow.

- **flex,flex-grow,flex-shrink**

  - These are items level Property.

  - To increase the element width we can use flex = auto. It means that flex-grow = 1, flex-shrink = 1 and flex-basis = auto (auto means that element width will intial set based on their own width).

  - We can set flex = 1, which will cause flex-grow = 1, flex-shrink = 1 and flex-basis = 0.

  - Using flex: 1 says that all items have zero size, therefore all of the space in the flex container is available to be distributed. As all items have a flex-grow factor of 1 they all grow equally and the space is shared equally.

  - You don't have to give all items a flex-grow factor of 1. You could give your flex items different flex-grow factors. In the demo below the first item has flex: 1, the second flex: 2 and third flex: 3. As these items grow from 0 the available space in the flex container is shared into six. One part is given to the first item, two parts to the second, three parts to the third.

- **Why is there no justify-self in flexbox?**

  - Flex items act as a group on the main axis. So there is no concept of splitting an individual item out of that group.

**flex-grow: number; /_ default 0 _/
flex-shrink: number; /_ default 1 _/
flex-basis: length, auto; /_ default auto _/**

## Question- Three Div in a div and all those three div will be equal length.

    - Answer - Give display flex to parent and give flex = 1, or flex-grow = 1 , to all the three elements.
