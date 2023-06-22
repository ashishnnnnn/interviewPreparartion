function sum(...args){
    if(args.length===5){
        return args.reduce((accum,curr)=>accum+=curr,0)
    }
    else{
        const recursiveFn = (...args2)=>{
            args = args.concat(args2)
            if(args.length===5){
                return args.reduce((accum,curr)=>accum+=curr,0)
            }
            return recursiveFn
        }
        return recursiveFn
    }
}


console.log(sum(1,2,3)(4,5))
console.log(sum(1,2,3,4,5))
console.log(sum(1,2)(3,4,5))
console.log(sum(1)(2)(3)(4)(5))