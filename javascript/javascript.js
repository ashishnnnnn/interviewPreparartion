let obj = {
  name: "Ashish",
  address: {
    city: "Arrah",
    dis: "Bhojpur",
  },
};

function deep_copy(obj, ret_obj = {}) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      ret_obj[key] = { ...obj[key] };
      deep_copy(obj[key], ret_obj[key]);
    } else {
      ret_obj[key] = obj[key];
    }
  }
  return ret_obj;
}

let new_obj = deep_copy(obj);
obj.address.city = "Patna";
console.log(obj);
console.log(new_obj);
