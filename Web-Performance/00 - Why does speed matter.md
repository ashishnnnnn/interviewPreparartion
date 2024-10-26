## Why speed matters

- Speed of the web app is directly related with the ui experience and dropouts from the web page. If a website or a web app is very fast , and it provide the content which a user of looking for then it's business will automatically be affected by this.

### Parameters to measure the speed.

- **Largest Contentful Paint (LCP)**
    - LCP is a strong indicator of a page's perceived load speed. A fast LCP means the page feels quicker to load because the main content is visible sooner.
    - Factors Affecting LCP:
        - __Slow server response times__: The server takes too long to respond to the user's request.
        - __Render-blocking resources__: CSS or JavaScript files that delay rendering of the page.
        - __Client-side rendering__: If the page relies too much on JavaScript for rendering content, it can delay LCP.
        - __Slow resource load times__: Images, videos, or fonts that take too long to load can negatively impact LCP.
        - __Large image or video files__: Unoptimized media can cause delays.

    - **How to Improve LCP**
        - __Optimize Server Response Times__ : Use techniques like __caching, CDNs (Content Delivery Networks)__, and improving the backend performance to reduce the time the server takes to send a response.
        - __Remove Render-Blocking Resources__ : Minimize the use of blocking CSS and JavaScript
        - __Lazy-Load Images and Videos__ : Only load images and videos when they are about to appear in the viewport. This reduces the initial load time.
        - __Optimize and Compress Images__: Ensure that images are in the right format and compressed for faster load times (e.g., using modern formats like WebP).

- **Cumulative Layout Shift (CLS)**
    - CLS measures the total amount of unexpected layout shifts that occur during the lifespan of a page. It calculates how much visible content moves around without user interaction. A low CLS score means a more stable, pleasant experience for the user
    - __Importance__: High CLS can frustrate users by causing content to jump around unexpectedly, leading to clicks on the wrong buttons, accidental interactions, or disrupted reading. For example, imagine you're about to click a "Submit" button, but just as you're about to click, an image loads above it, pushing the button down and causing you to click a different element instead.+

    - **Common Causes of Layout Shifts**
        - __Images without specified dimensions__: When an image is loaded and the browser does not know its size beforehand, the layout can shift as the image is loaded.
        - __Ads, embeds, or iframes without dimensions__: Similar to images, if an ad or embedded content is loaded without predefined dimensions, it can cause layout shifts.
        - __Dynamically injected content__: When content like banners, pop-ups, or widgets are dynamically inserted into the page without reserving space for them, they can push existing content around.
    
    - **How to Reduce CLS**
        - __Always include size attributes for images and videos__
        - __Reserve space for ads and dynamic content__
        - __Avoid inserting content above existing content__


- **First Contentful Paint**
    - FCP measures the time from when the user starts navigating to a page until the browser renders the first piece of content on the screen. This content could be any text, image (including background images), or non-white canvas element.
    - 