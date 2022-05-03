# Flatten an object -

```js
const flatten_an_object = (object, is_key, ret_obj = {}) => {
  for (let key in object) {
    let newKey = is_key ? is_key + "_" + key : key;
    if (typeof object[key] === "object") {
      flatten_an_object(object[key], newKey, ret_obj);
    } else {
      ret_obj[newKey] = object[key];
    }
  }
  return ret_obj;
};

let object = {
  name: "Ashish",
  address: {
    city: "Arrah",
    dist: "Bhojpur",
  },
};

console.log(flatten_an_object(object));
```

- https://stackblitz.com/edit/js-hqejvv
