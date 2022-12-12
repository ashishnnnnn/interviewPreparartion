function changeAgeAndReference(person){
    person.age = 25;
    person = {
        name:"John",
        age:50
    }

    return person;
}

const person1 = {
    name:"Alex",
    age:30
}

const person2 = changeAgeAndReference(person1);

console.log(person1);
console.log(person2)

// {name:"Alex",age:25}

// {name:"John",age:50}