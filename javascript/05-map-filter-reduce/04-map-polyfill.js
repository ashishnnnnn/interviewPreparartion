Array.prototype.my_map = function (cb) {
  let ret_array = [];
  for (let i = 0; i < this.length; i++) {
    let result = cb(this[i], i, this);
    ret_array.push(result);
  }
  return ret_array;
};

let array = [1, 2, 3, 4, 5];
console.log(
  array.my_map((ele, idx, arr) => {
    return ele * 3;
  })
);
