function makeUser(){
    return {
        name:"John",
        ref(){
            return this;
        }
    }
}

let user = makeUser();

console.log(user.ref().name)

/*

    It will be John 
    As as "this" will refer to the return object

*/