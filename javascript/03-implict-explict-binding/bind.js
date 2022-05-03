function hello(last_name, state) {
  console.log("Hello", this.first_name, last_name, "from", state);
}

let obj1 = {
  first_name: "Ashish",
};

let bind_fn = hello.bind(obj1);

bind_fn("Singh", "Patna");
