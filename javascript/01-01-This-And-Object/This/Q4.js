function makeUser(){
    return {
        name:"John",
        ref:this
    }
}

let user = makeUser();

console.log(user.ref.name)

/*

    It will be undefined 
    As as "this" will refer to window object

*/