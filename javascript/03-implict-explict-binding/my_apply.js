let obj = {
  name: "Ashish",
  greet: function (city) {
    console.log("Hello", this.name, "from", city);
  },
};

let obj2 = {
  name: "Jai Hoo",
};

Function.prototype.my_apply = function (object, args) {
  object.fn = this;
  return args ? object.fn(...args) : object.fn();
};

obj.greet.my_apply(obj2, ["Patna"]);
