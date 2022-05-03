function hello(last_name, state) {
  console.log("Hello", this.first_name, last_name, "from", state);
}

let obj1 = {
  first_name: "Ashish",
};

hello.apply(obj1, ["Kumar", "Bihar"]);
