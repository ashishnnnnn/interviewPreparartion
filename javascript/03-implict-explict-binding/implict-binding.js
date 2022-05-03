//  Implict Binding -

const obj = {
  name: "Ashish",

  hello: function () {
    console.log("Hello ", this.name);
  },
};

obj.hello();
