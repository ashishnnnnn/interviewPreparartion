const property = "First_name"
const name = "Ashish"

let obj = {
    property:name
}

let obj1 = {
    [property]:name
}

console.log(obj);
console.log(obj1)

/*

 -> { property: 'Ashish' }
 -> { First_name: 'Ashish' }

 So when we wrap inside a square object it acts as a dynamic property.

*/