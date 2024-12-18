// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(`Hello, ${this.firstName}!`);
//     }
// };

// let sayHi = user.sayHi.bind(user); // (*)

// // can run it without an object
// sayHi(); // Hello, John!

// setTimeout(sayHi, 1000); // Hello, John!

// // even if the value of user changes within 1 second
// // sayHi uses the pre-bound value which is reference to the old user object
// user = {
//     sayHi() { console.log("Another user in setTimeout!"); }
// };

// function pipe(){
//     const functions = arguments;
//     return function(obj){
//         let ret = []
//         for(let i=0;i<functions.length;i++){
//             try{
//                 let fun = functions[i];
//                 let val = fun(obj)
//                 if(val){
//                     ret.push(fun(obj))
//                 }
//             }
//             catch(e){

//             }
//         }
//         return ret;
//     }
// }

// // pipe(1,2,3)



// const getName = (object) => object.name;
// const makeUpperCase = (string) => string.toUpperCase();
// const slice = (string) => string.slice(0, 3);

// const method = pipe(getName,makeUpperCase,slice);

// const value = method( 'devtools' );

// console.log(value);



// function mostUsedWord(text1, bannedWords) {
//     function isAlphabet(char) {
//         return /^[a-zA-Z]$/.test(char);
//     }
//     let map = new Map();
//     let n = text1.length;
//     let text = "";
//     let maxKey = "";
//     let maxVal = 0;
//     for(let i=0;i<n-1;i++){
//       let letter = text1[i];
   
//       if(letter===" "){
//         if (bannedWords && bannedWords.indexOf(text)!==-1){
//           text = ""
//           continue;
//         }
        
//         if (map.has(text)){
//           map[text]= map[text]+1;
//           map.set(text,map.get(text)+1)
//         }
//         else{
//           map[text] = 1;
//           map.set(text,1)
//         }
//         if(map[text]>maxVal){
//           maxKey = text;
//           maxVal = map[text]
//         }
//         text = ""
//       }
//       else{
//         if(isAlphabet(letter)){
//             text+=letter;
//         }
       
//       }
//     }
//     if (text.length > 0){
//       if (bannedWords && bannedWords.indexOf(text) !== -1) {
//         return maxKey;
//       }
//       if (map.has(text)) {
//         map[text] += 1;
//       }
//       else {
//         map[text] = 1;
//       }
//       if (map[text] > maxVal) {
//         maxKey = text;
//         maxVal = map[text]
//       }
//     }
//     return maxKey
  
//     // write your code below
//   }

//   const text = 'Bob hit a ball, the hit ball flew far after it was hit.';

//   const answer = mostUsedWord(text); 
//   console.log(answer)  

// function deepEqual(value, other) {
//     'use strict';
//     // write your solution below
//     if(typeof value!==typeof other){
//         return false;
//     }
//     if((value && !other )|| (!value && other)){
//         return false;
//     }
//     for(let key in value){
//         if(typeof value[key]!==typeof other[key]){
//             return false;
//         }
//         if(typeof value[key]==="object"){
//             deepEqual(value[key],other[key])
//         }
//         else if(value[key]!==other[key]){
//             return false
//         }
//     }
//     return true
// }
  


// let value = { a: 1 };
// let other = { a: 1 };

// console.log(deepEqual(value, other));
// // => true

// // value = { a: { b: { c: { d: 2 } } } };
// // other = window.structuredClone(value);

// console.log(deepEqual(value, other));
// // => true

// value = { a: 2 };
// other = { a: 3 };

// console.log(deepEqual(value, other));
// // => false  

// console.log(deepEqual());
// // => true

// value = { a: 1 };
// other = null;

// console.log(deepEqual(value, other));
// // => false

// value = { a: 1 };
// other = undefined

// console.log(deepEqual(value, other));
// // => false

// value = { a: 1 };

// console.log(deepEqual(value));
// // => false



// function once(callback) {
//     // write your code below
//     let called = 0;
//     return function(){
//         if(called===0){
//             callback()
//             called+=1;
//         }
        
//     }
// }

// function test(){
//     console.log("I am getting called")
// }

// let test1 = once(test);

// test1()
// test1()


// function customRepeat(count) {
//     // do not remove
//     'use strict';
  
//     // write your code below
//     let retVal = "";
//     for(let i=0;i<count-1;i++){
//         retVal+=(this+" ");
//     }
//     if(count>0){
//         retVal+=this
//     }
//     return retVal;
//  }

//  String.prototype.customRepeat = customRepeat;

//  console.log("abc".customRepeat(3))


// function filter(collection, callback) {
//     // DO NOT REMOVE
//     'use strict';
  
//     let retObj = {}
//     for(let key in  collection){
//         if(typeof collection[key]!=="object"){
//             if(callback(collection[key])){
//                 retObj[key] = collection[key]
//             }
//         }
//         else{
//             let val = filter(collection[key],callback);
//             if(Object.keys(val).length>0){
//                 retObj[key] = filter(collection[key],callback)
//             }
//         }
            
//     }
//     return retObj;
// }
  
// // const input = {
// //     a: 1,
// //     b: {
// //       c: 2,
// //       d: -3,
// //       e: {
// //         f: {
// //           g: -4,
// //         },
// //       },
// //       h: {
// //         i: 5,
// //         j: 6,
// //       },
// //     }
// // };
  
// // const callback = element => element >= 0;

// // const filtered = filter(input, callback);

// // console.log(filtered)

// const callback = element => typeof element === "string";

// const input = {
//     a: 1,
//     b: {
//       c: 'Hello World',
//       d: 2,
//       e: {
//         f: {
//           g: -4,
//         },
//       },
//       h: 'Good Night Moon',
//     },
//   }

// const filtered = filter(input, callback);

// // { b: { c: 'Hello World', h: 'Good Night Moon' } } 
// console.log(filtered);



// function cloneDeep(input) {
//     // write your code below
//     let retObj = {};
//     for(let key in input){
//         if(typeof input[key]==="object"){
//             retObj[key] = cloneDeep(input[key]);
//         }
//         else{
//             retObj[key] = input[key]
//         }
//     }
//     return retObj
// };


// var original = {
//     name: "Devtools Tech",
//     details: {
//       link: 'youtube.com/devtoolstech',
//       subs: 3500,
//       tags: [{ id: 1, value: "devtoolstech" }]
//     }
//   }
  
//   // deep cloning the original object
//   var cloned = cloneDeep(original);
  
//   // updating the values
// cloned.name = "Tech Devtools";
// cloned.details.tags[0].value = "frontend";

// // prints Devtools Tech
// console.log(original.name);

// // prints Tech Devtools
// console.log(cloned.name);

// // prints devtoolstech
// console.log(original.details.tags[0].value);

// // prints frontend
// console.log(cloned.details.tags[0].value);

// const localStorage = {
//     stored:{},
//     setItem: function(key,value){
//         this.stored[key] = value;
//     },
//     getItem: function(key){
//         return this.stored[key]
//     },
//     removeItem: function (key){
//         delete this.stored[key]
//     },
//     get length(){
//         return Object.keys(this.stored).length
//     },
//     clear: function(){
//         this.stored = {}
//     }
// };

// console.log(localStorage.length)
// localStorage.setItem("Ashish","Kumar")
// localStorage.setItem("Nancy","Gupta")
// console.log(localStorage.getItem("Nancy"))
// console.log(localStorage.length)
// localStorage.removeItem("Ashish")
// console.log(localStorage.length)
// localStorage.clear()
// console.log(localStorage.length)



// const devtools = Object.create(null);
// console.log(devtools)
// devtools.jello = "Ashish"
// console.log(devtools)
// console.log(devtools.constructor); 
// console.log(devtools.__proto__);



// function race(arr) {
//     return new Promise((resolve,reject)=>{
//         for(let i=0;i<arr.length;i++){
//             Promise.resolve(arr[i]).then((val)=>{
//                 resolve(val)
//             }).catch((err)=>{
//                 reject(err)
//             })
//         }
//     })
// };

// Promise.race = race;

// // Example 2

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'one');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'two');
//   });
  
//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//   }).catch((err) => {
//     console.log(err);
//     // promise1 is rejected first. Hence, it should output "one" 
//   });
  
// const a = "1"
// console.log(a)
// console.log(+a)

// switch (+a) {
//   case "1":
//     console.log("🍕");
//     break;
//   case 1:
//     console.log("🚀");
//     break;
//   default:
//     console.log("👻");
// }

function gotArray(inputArray){
  const result = [];
  let currentSubArray = [];

  for (const item of inputArray) {
    if (item === ",") {
      result.push(currentSubArray); // Add the current subarray to the result
      currentSubArray = [];        // Reset the current subarray
    } else {
      currentSubArray.push(item);  // Add the item to the current subarray
    }
  }

  // Add the last subarray (if any) to the result
  if (currentSubArray.length > 0) {
    result.push(currentSubArray);
  }
  return result;
}

function solve(args){
  let spliited = gotArray(args);
  console.log("splooted",spliited)
  if(spliited.length===1){
    return spliited[0];
  }
  else{
    let last = spliited.pop();
    let secondLast = spliited.pop();
    let i = 0;
    let j = 0;
    while(i<secondLast.length && j<last.length){
      if(secondLast[i]===curry.placeholder){
        secondLast[i] = last[j];
        i++;
        j++;
      }
      else{
        i++;
      }
    }
    while(j<last.length){
      secondLast.push(last[j]);
      j++;
    }
    console.log("splited here",spliited)
    console.log("secondLast",secondLast)
    spliited.push(secondLast)
    console.log("splited here 1",spliited)
    let constructArray = [];
    spliited.forEach((ele)=>{
      constructArray = constructArray.length>0 ? [...constructArray,",",...ele] : [...ele]
      
    })
    console.log("constructArray",constructArray)
    return solve(constructArray)
  }
}

function curry(fn) {
  
  // your code here
  return function curriedJoin(...args){
    console.log("Jello")
    let placeholder = 0;
    let values = 0;
    args.forEach((ele)=>{
      if(ele===curry.placeholder){
        placeholder+=1
      }
      else if(ele!==","){
        values+=1;
      }
    })
    let realAragsLength = args.reduce((accum,curr)=>{
      if(curr!==curry.placeholder && curr!==","){
        return [...accum,curr]
      }
      else{
        return accum
      }
    },[])
    if(realAragsLength.length>=fn.length && placeholder===values){
      console.log("args",args)
      let val = solve(args);
      console.log("val",val)
      // return fn(...val)
    }
    else{
      return function(...args2){
        return curriedJoin(...args,",",...args2)
      }
    }
  }
}

curry.placeholder = Symbol()





const  join = (a, b, c) => {
  return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)
const _ = curry.placeholder
console.log("The output is 1",curriedJoin(_,_,3,4)(1,_)(2,5)) // '1_2_3'
// console.log("The output is 1",curriedJoin(_, 2)(1, 3)) // '1_2_3'
// console.log("The output is 2,",curriedJoin(_, _, _)(1)(_, 3)(2)) // '1_2_3'

