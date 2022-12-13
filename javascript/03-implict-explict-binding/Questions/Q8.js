const age = 10

var person = {
    name:"Piyush",
    age:20,
    getAgeArrow:()=>console.log(this.name),
    getAge(){
        console.log(this.name)
    }
}

var person2 = {age: 24}

person.getAgeArrow.call(person)  // We can't manupulate the the context of arrow function by call , bind and apply . The "this" of 
// Arrow function will always be pointing to the parent function this.

person.getAge.call(person)