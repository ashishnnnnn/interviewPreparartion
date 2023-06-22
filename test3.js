function check(array){
    let start = -1;
    let obj = {}
    for(let i=0;i<array.length;i++){
        if(array[i]===0){
            if(start===-1){
                start = i;
                continue;
            }
        }
        else{
            if(start!==-1){
                let strek = i-start;
                if(!obj[strek]){
                    obj[strek] = [start,i-1]
                }
                start = -1;
            }
        }
    }
    if(start!==-1){
        let streak = array.length - start;
        if(!obj[streak]){
            obj[streak] = [start,array.length-1]
        }
    }
    let threshold = 0;
    let ret = [];
    for(let key in obj){
        if(key>threshold){
            threshold = key;
            ret = obj[key]
        }
    }
    return ret
}

let array = [1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0]
let array1 = [0,1,1,1,1]

console.log(check(array1))