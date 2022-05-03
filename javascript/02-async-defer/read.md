# Async and Defer -

- Both Async and Defer will load the script asynchronously without the render blocking , but Async will start excuting the loaded script file as fast as it can , Whereas Defer will wait for the dom to get rendering complete and then it start executing the script file.

## Async -

- Downloads in the background at a low priority (same as defer)

- Can interrupt page rendering to execute

- Executes as soon as possible and in no particular order

## Defer -

- Downloads in the background at a low priority (same as async)

- Won't interrupt page rendering to execute

- Executes in sequence just before the DOMContentLoaded event

## When to Use Async -

- Async should be used when we need to load some javascript file which is highpriority.
- Async will compermise with rendering time.
- If there are more than two files both are in Async , then they will run in random order.So both file should be independent to each other.

## When to Use Defer -

- Defer should be use when we want the user experience should be high priority.

- Rendering Happens here first .
