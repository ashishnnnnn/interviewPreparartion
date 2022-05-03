let obj = {
  name: "Ashish",
  greet: function () {
    console.log("Hello", this.name);
  },
};

let obj2 = {
  name: "Jai Hoo",
};

Function.prototype.my_bind = function (obj) {
  const fn = this;
  return function () {
    fn.call(obj);
  };
};

let fn = obj.greet.my_bind(obj2);
fn();
