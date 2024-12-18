import { useState ,useEffect} from "react"
import "./style.css"

const ProgressiveBar = ()=>{
    const [width,setWidth] = useState(0);

    useEffect(()=>{
        let timeOut;
        if(width!==100){
            timeOut = setTimeout(()=>{
                setWidth((preVal)=>preVal+1)
            },100)
        }
        return (()=>{
            clearTimeout(timeOut)
        })
    },[width])
    return(
        <div className="progressBar">
            <div style={{width:`${width}%`}} className="progressBarFill">

            </div>
            <span className="percentage">{width}%</span>
        </div>
    )
}

export default ProgressiveBar;