//  forEach doesn't return any new Array whereas map return a new array

//  As forEach return a new Array , we can do chaining on that , i.e, filter,reduce etc.

let array = [1, 2, 3, 4, 5];

let map_array = array.map((ele) => (ele *= 3));

let forEachArray = array.forEach((ele) => (ele *= 2));

console.log(map_array, forEachArray);
