let count = 0;

function go_to_api() {
  console.log("Api is Called...", count++);
}

function debouncing(fn, delay) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn();
    }, delay);
  };
}

const better_fn = debouncing(go_to_api, 300);
