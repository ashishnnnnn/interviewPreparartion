import { useEffect, useRef } from "react"


//// You have to React.Strict Mode.. to rmove double render in first time..

const useWhyDidYouUpdate = (comp,props)=>{
    const memo = useRef([]);
    
    useEffect(()=>{
        memo.current.push(props)
        if(memo.current?.length===1){
            console.log("I run because initial render")
        }
        else{
            let firstProp = memo.current[0];
            let secondProp = memo.current[1];

            let reason = "";
            for(let key in firstProp){
                if(firstProp[key]!==secondProp[key]){
                    reason+=`${key} value changed`
                }
            }
            console.log(reason);
            memo.current.shift();
        }
    })
}

export default useWhyDidYouUpdate;