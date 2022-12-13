const age = 10;

var person = {
    name:"Piyush",
    age:20,
    getAge: function(){
        return this.age
    }
}

var person1 = {age:23}

console.log(person.getAge.call(person1))

//  Output is 23