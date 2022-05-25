// let object = {
//   name: "Ashish",
//   address: {
//     city: "Arrah",
//     dist: "Bhojpur",
//     jagah: {
//       ghar: "Pata nahi",
//     },
//   },
// };

// function flatten_obj(obj, is_key, ret_obj = {}) {
//   for (let key in obj) {
//     let new_key = is_key ? is_key + "_" + key : key;
//     if (typeof obj[key] === "object") {
//       flatten_obj(obj[key], new_key, ret_obj);
//     } else {
//       ret_obj[new_key] = obj[key];
//     }
//   }
//   return ret_obj;
// }

// console.log(flatten_obj(object));

var a = 10;
const obj = {
  a: 1,
  e: (() => {
    console.log(this.a);
  })(),
};
obj.e();
