//  Append an array to another array

const array = ["a","b"]

const element = [0,1,2]

array.push.apply(array,element)

console.log(array)