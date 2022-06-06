# DOM -

So when HTML page get loaded , browser creates a dom tree where each node will be in the form of object and that object will contain information related to the element.

# CSSOM -

Css Object Modal will be created which is also a tree like structure where each node will have some styling property which will be applied to the corresponding element of Dom . Note - Even if we haven't specified any property that will be calculated in CSSOM which will be simply default value.

# Rendered Tree -

So with the help of DOM and CSSOM browser will create Render Tree which . With the help of Rendred Tree browser shows the element of screen.

-> When a web page is loaded, the browser first reads the HTML text and constructs DOM Tree from it. Then it processes the CSS whether that is inline, embedded, or external CSS and constructs the CSSOM Tree from it.

After these trees are constructed, then it constructs the Render-Tree from it. Once the Render-Tree is constructed, then the browser starts the printing individual elements on the screen
