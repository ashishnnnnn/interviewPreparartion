# Cascade

- CSS stands for Cascading Style Sheet. It means When Mutliple CSS rules is applied to a HTML element, then it is used for resolving the conflicts.

---

## Cascading Algorithm Will Work In 4 Stage.

    1. Position or Order Of Appearence .

    2. Specificty - Used To Determine Which Selector has higher Precedence.

    3. Origin Of Css Style.

    4. Importance .

### Position Or Order Of Appearence .

    - If you have a <link> that includes CSS at the top of your HTML page, then another <link> that includes CSS at the bottom of your page: the bottom <link> will have the most specificity. The same thing happens with embedded <style> elements, too. They get more specific, the further down the page they are.

### Specificity

    - Specificity is an algorithm which determines which CSS selector is the most specific, using a weighting or scoring system to make those calculations

    1. Univesal Selectors Have 0  Specificity. It means every other selectors will override the property defined in it.

    2. Element or Pseudo Element Selectors have 1 (0,0,1) Specificity. So if a selector has two element type Ex - div h1{color:red} so here the specificty of this selector will be 2 (0,0,2)

    3. Class, pseudo-class, or attribute selector has 10 (0, 1, 0) Specificity.

      Ex - "[class=text] p:hover {
            /* your style here */
            }"
            Here we have 1 attribute selector (0,1,0), one Pseudo Class Selector (0,1,0) and one type selector p.

            So , the specificty of the element will be (0,2,1)

    4. ID selector has 100 as it's Specificty . (1,0,0)

    5. Inline Style - Specificity - (1, 0, 0, 0)

      The inline style will overwrite all your style rules in the CSS file.

    6. !important property

      The !important property has the highest specificity, use it carefully.

    Examples-

    1. "
        #myDiv #another-div a {
            /* your style here */
        }
        "  - Here Specificty Will be (2,0,1) - As two Id selectors and 1 element selector.

    2. "a.my-class {
        color: green;
        }" - Specificty is (0,1,1) = 11. As one element selector and One class.

    3.  "a.my-class.another-class {
          color: rebeccapurple;
          }" - Specificty is (0,2,1) = 21 . One class is added here .

    4.  "a.my-class.another-class[href] {
        color: goldenrod;
        }" - Specificty is (0,3,1) = 31. One Attribute selector [href] is added.

    5. "a.my-class.another-class[href]:hover {
        color: lightgrey;
        } - Specificty is (0,4,1) = 41 As one more hover Pseudo Is being Added.


