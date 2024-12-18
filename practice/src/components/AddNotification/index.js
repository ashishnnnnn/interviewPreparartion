import "./style.css"
import { useToast } from "./useNotification"

const Buttons = [
    {type:"Info",color:"#3498db"},
    {type:"Success",color:"#2ecc71"},
    {type:"Warning",color:"#f1c40f"},
    {type:"Error",color:"#e74c3c"}
]

const AddNotification = ()=>{
    const { handleAddContext } = useToast()
    return(
        <div className="container">
            <p>Add Notifications</p>
            {
                Buttons.map((ele)=>(
                    <div onClick={()=>handleAddContext({type:ele.type,message:ele.type})} style={{backgroundColor:ele.color}} key={ele.type} className="button">{ele.type}</div>
                ))
            }
        </div>
    )
}

export default AddNotification;