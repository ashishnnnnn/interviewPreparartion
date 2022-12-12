//  Create Deep Copy 


function DeepCopy(obj,ret={}){
    for(let key in obj){
        if(typeof obj[key]=="object"){
            ret[key] = {...obj[key]};
            DeepCopy(obj[key],ret[key]);
        }
    }
    return ret;
}

let obj1 = {
    name:"Ashish",
    fullName:{
        firstName:"Ashish Bhau",
        lastName:"Singh is King"
    }
}


let obj2 = {...obj1};

let obj3 = DeepCopy(obj1);

obj1.fullName.firstName = "Kya huwa";

console.log("obj2",obj2)

console.log("obj3",obj3)


