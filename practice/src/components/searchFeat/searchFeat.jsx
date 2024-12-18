import React,{useState,useEffect,useRef} from "react";
import "./index.css"

// let timeout ;

const SearchBar = ()=>{
    const [value,setValue] = useState("")
    const [data,setData] = useState([])
    const flag = useRef(true)
    const handleChange = (e)=>{
        setValue(e.target.value)
    }

    // useEffect(()=>{
    //     clearTimeout(timeout)
    //     timeout = setTimeout(() => {
    //         if(value.length>0){
    //             fetch(`https://swapi.dev/api/people/?search=${value}`)
    //             .then((res)=>res.json())
    //             .then((data)=>setData(data.results))
    //             .catch((err)=>console.log(err))
    //         }
    //         else{
    //             setData([])
    //         }
    //     }, 500);
        
    // },[value])

    useEffect(()=>{
        if(flag.current){
            flag.current = false;
            setTimeout(() => {
                flag.current = true;
                if(value.length>0){
                    fetch(`https://swapi.dev/api/people/?search=${value}`)
                    .then((res)=>res.json())
                    .then((data)=>setData(data.results))
                    .catch((err)=>console.log(err))
                }
                else{
                    setData([])
                }
            }, 1000);
        }
        
    },[value])

    return (
        <div className="searchContainer">
            <input onChange={handleChange} value={value} className="input" />
            <div className="resultContainer">
                {data && data.map((ele,idx)=> {
                    return <div className="bar" key={idx}>{ele.name}</div>
                })}
            </div>
        </div>
    )
}

export default SearchBar