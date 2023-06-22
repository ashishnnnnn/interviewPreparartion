function flattenObj(curr_obj,isKey,ret_obj={}){
    for(let key in curr_obj){
        let newKey = isKey ? isKey+"_"+key : key
        if(typeof curr_obj[key]==="object"){
            flattenObj(curr_obj[key],newKey,ret_obj)
        }
        else{
            ret_obj[newKey] = curr_obj[key]
        }
    }
    return ret_obj;
}




let object = {
    name: "shish",
    address: {
        city: "Arrah",
        dist: "Bhojpur",
    },
};

let newObj = flattenObj(object)

console.log(newObj)

