Q.1) - 

```js
console.log("start")

const sub = Promise.resolve("Ashish kumar");
sub.then((res)=>{
    console.log(res)
})

console.log("end")

```

<!-- Output will be start,end,Ashish Kumar -->

Q.2)- 

```js
console.log("start");

const promise1 = new Promise((resolve,reject)=>{
    console.log(1);
    resolve(2)
})

promise1.then((res)=>{
    console.log(res)
})

console.log("end")

```

<!-- Output will be 
start
1
end
2 -->