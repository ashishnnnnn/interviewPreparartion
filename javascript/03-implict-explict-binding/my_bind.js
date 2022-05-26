let obj = {
  name: "Ashish",
  greet: function (city, country) {
    console.log("Hello", this.name, "from", city, "from", country);
  },
};

let obj2 = {
  name: "Jai Hoo",
};

Function.prototype.my_bind = function (object) {
  const fn = this;
  return function (...args) {
    fn.call(object, ...args);
  };
};

let my_bind_ret = obj.greet.my_bind(obj2);
my_bind_ret("Ara", "India");
