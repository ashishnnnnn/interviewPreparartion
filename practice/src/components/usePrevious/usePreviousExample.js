import { useState } from "react";
import { usePrevious } from "./usePrevious";

const UsePreviousExample = ()=>{
    const [count,setCount] = useState(0);
    const [previousValue] = usePrevious(count);

    console.log(previousValue)

    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px"}}>
            <h2>Current Count - {count}</h2>
            <h2>Previous Count - {previousValue}</h2>
            <button onClick={()=>setCount((preVious)=>preVious+1)}>Increase Me</button>
        </div>
    )
}

export default UsePreviousExample;