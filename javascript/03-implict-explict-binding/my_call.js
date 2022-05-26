let obj = {
  name: "Ashish",
  greet: function (city) {
    console.log("Hello", this.name, "from", city);
  },
};

let obj2 = {
  name: "Jai Hoo",
};

Function.prototype.my_call = function (object, ...argument) {
  object.fn = this;
  return argument ? object.fn(...argument) : object.fn();
};

obj.greet.my_call(obj2, "Patna");
