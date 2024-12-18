let obj = {
    name:"Ashish",
    address:{
        vill:"Chilhar",
        ps:"Azimabad"
    }
}

function changeToString(val){
    if(typeof val===null){
        return "null"
    }
    if(typeof val==="string"){
        return `${val}`
    }
    if(typeof val==="number" || typeof val==="boolean"){
        return String(val)
    }
    if(Array.isArray(val)){
        const arrayItems = val.map((ele)=>changeToString(ele));
        return `[${arrayItems.join(",")}]`
    }
    if(typeof val==="object"){
        const collection = Object.keys(val).map((ele)=>{
            if(typeof val[ele]==="object"){
                return `"${ele}":${changeToString(val[ele])}`
            }
            return  `"${ele}":"${changeToString(val[ele])}"`
        })
        return `{${collection.join(",")}}`
    }
    return undefined
}

let obj2 = JSON.stringify(obj)
console.log("obj2",obj2)
let obj3 = changeToString(obj)
console.log("obj3",obj3)