const func = (function(a){
    delete a;
    return a;
})(5)

console.log(func)

/*
    So delete will only be used to delete the property of object not any local variable
    and thus "a" which is a local variable is not deleted yet and thus it will return 5.

*/