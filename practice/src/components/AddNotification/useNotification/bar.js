import { useToast } from ".";
import "./style.css"
import {  useEffect, useState } from "react"


const Bar = ({type,message,id})=>{
    const [width,setWidth] = useState(0);
    const [pause,setPause] = useState(false)
    const { handleRemoveContext} = useToast()
    useEffect(()=>{
        let timeOut;
        if(width!==100 && !pause){
            timeOut = setTimeout(() => {
                setWidth((width)=>width+1)
            }, 100);
        }
        else if(width===100){
            handleRemoveContext(id)
        }
        return(()=>{
            clearTimeout(timeOut);
        })
    },[width,pause])
    return(
        <div onMouseLeave={()=>setPause(false)} onMouseEnter={()=>setPause(true)} className={`bar ${type}`}>
            <p style={{width:`${width}%`,transition:"all 0.1s linear"}} className="progressBar"></p>
            {message}
            {width}
        </div>
    )
}

export default Bar