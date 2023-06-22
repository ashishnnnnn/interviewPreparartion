// let array = [1,2,3,4,5]

// // const newArray = array.filter((ele)=>ele%2===0)

// // const sum = array.reduce((accum,curr)=>accum+=curr,0)

// Array.prototype.my_reduce = function(cb,intial_value){
//     const currArray = this;
//     let accumulator = intial_value;
//     for(let i=0;i<currArray.length;i++){
//         if(accumulator){
//             accumulator = cb(accumulator,this[i],i,this)
//         }
//         else{
//             accumulator = this[i]
//         }
//     }
//     return accumulator
// }

// Array.prototype.my_call = function(cb){
//     const currArray = this;
//     let returnArray = [];
//     currArray.forEach((ele)=>{
//         returnArray.push(cb(ele))
//     })
//     return returnArray;
// }

// const sum = array.my_reduce((accum,curr)=>accum+=curr,0)

// const hello = array.my_call((ele)=>ele*2)

// console.log("hello",hello)



// const base = (a)=>(b)=>(a+b)

// const addSix = base(6)

// console.log(addSix(10))


// const calledOnce = ()=>{
//     let ifCalled =false;
//     return function(){
//         if(ifCalled){
//             return "Already Called"
//         }
//         else{
//             ifCalled = true;
//             return "Subscribed"
//         }
//     }
// }

// const subScribe = calledOnce();
// console.log(subScribe())
// console.log(subScribe())
// console.log(subScribe())

// const fakeFetch = (value, delay, isreject) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isreject) {
//                 reject("Reject Hoogaya Kya kare");
//             } else {
//                 resolve(value);
//             }
//         }, delay * 1000);
//     });
// };

// const promiseAll = (promiseArray) => {
//     return new Promise((resolve, reject) => {
//         let retArray = [];
//         let completed = 0;
//         promiseArray.forEach(async (ele, idx) => {
//             try {
//                 let result = await Promise.resolve(ele);
//                 retArray[idx] = result;
//                 completed += 1;
//                 if (completed === promiseArray.length) {
//                     resolve(retArray)
//                 }
//             }
//             catch (e) {
//                 reject("Error came")
//             }
//         });
//     })
// }

// let array_of_promise = [
//     fakeFetch("nancy", 4, false),
//     fakeFetch("Ashish", 1, false),
//     3,
//     4,
//     5,
// ];

// promiseAll(array_of_promise).then((data) => {
//     data.forEach((val) => console.log(val));
// });

// console.log("start")

// const sub = Promise.resolve("Ashish kumar");
// sub.then((res)=>{
//     console.log(res)
// })

// console.log("end")


// function flattenAnObject(obj, pre_key, retObj = {}) {
//     for (let key in obj) {
//         let newKey = pre_key ? pre_key + "_" + key : key;
//         if (typeof obj[key] === "object") {
//             flattenAnObject(obj[key], newKey, retObj)
//         }
//         else {
//             retObj[newKey] = obj[key]
//         }
//     }
//     return retObj;
// }

// let object = {
//     name: "Ashish",
//     address: {
//         city: "Arrah",
//         dist: "Bhojpur",
//         detail:{
//             landmark:"Bajaj_Showroom_Kai_Pass"
//         }
//     },
// };

// console.log(flattenAnObject(object));
let obj = {
    name: "Ashish",
    city: "Arrah",
    greet: function () {
      console.log("Hello", this.name, "from", this.city);
    },
  };
  
  let obj1 = {
    name: "Adithya",
  };
  
  obj1.__proto__ = obj;
  
//   obj1.city; //Arrah
  
  obj1.greet(); // Hello Aditya From Arrah