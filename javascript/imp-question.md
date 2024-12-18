# 1
We’ve got an array of objects to sort:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
The usual way to do that would be:

// by name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
Can we make it even less verbose, like this?

users.sort(byField('name'));
users.sort(byField('age'));

Answer---
```js
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(key){
    return function(a,b){
       return  a[key]>b[key] ? 1:-1
    }
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age'))) ;
```



# 2..
WIth the help of setTimeout only call a function 10 times and then stop it.. call function every 10 sec..
```js
function hello(arg,times,curr){
    console.log("Hello",arg)
    if(times===curr){
        console.log("Hoogaya kaam")
        return
    }
    curr+=1;
    setTimeout(hello,1000,"Ashish",10,curr)
}


setTimeout(hello,1000,"Ashish",10,0)
```