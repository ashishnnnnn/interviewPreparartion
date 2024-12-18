import { createContext,useContext, useState } from "react";
import Bar from "./bar";

import { v4 as uuid } from "uuid";

const ToastContext = createContext({
    toast: [],
    handleAddContext: ()=>{},
    handleRemoveContext: ()=>{}
})

const useToast = ()=> useContext(ToastContext)

const ToastProvider = ({children})=>{
    const [toast,setToast] = useState([]);
    const handleAddContext = (new_toast)=>{
        setToast((preState)=>[...preState,{id: uuid(),...new_toast}])
    }

    const handleRemoveContext = (id)=>{
        setToast((preState)=>preState.filter((ele)=>ele.id!==id))
    }

    return(
        <ToastContext.Provider value={{toast,handleAddContext,handleRemoveContext}}>
            {children}
            {toast.length>0 ? 
             <div className="view">
                {
                    toast.map((ele)=>{
                        return <Bar key={ele.id} type={ele.type} message={ele.message} id={ele.id} />
                    })
                }
            </div>
            :null}
        </ToastContext.Provider>
    )
}

export {useToast, ToastProvider}