import "./style.css"
import React, { useState } from "react";

const menuData = [
    {
      id: 1,
      name: "Home",
      url: "/home",
      children: []
    },
    {
      id: 2,
      name: "About",
      url: "/about",
      children: [
        {
          id: 3,
          name: "Our Team",
          url: "/about/team",
          children: []
        },
        {
          id: 4,
          name: "Careers",
          url: "/about/careers",
          children: []
        }
      ]
    },
    {
      id: 5,
      name: "Services",
      url: "/services",
      children: [
        {
          id: 6,
          name: "Web Development",
          url: "/services/web-development",
          children: []
        },
        {
          id: 7,
          name: "Mobile Development",
          url: "/services/mobile-development",
          children: [
            {
              id: 8,
              name: "iOS Development",
              url: "/services/mobile-development/ios",
              children: []
            },
            {
              id: 9,
              name: "Android Development",
              url: "/services/mobile-development/android",
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 10,
      name: "Contact",
      url: "/contact",
      children: []
    }
  ];


const Display = ({data})=>{
    const [dropList,setDropList] = useState([]);
    const handleClick = (id)=>{
       let isInclude = false;
       let newArray = []
       dropList.forEach((ele)=>{
        if(ele===id){
            isInclude = true;
        }
        else{
            newArray.push(ele)
        }
       })
       if(!isInclude){
        newArray.push(id)
       }
       setDropList(newArray)
    }
    return(
        <>
            {
                data.map((ele)=>{
                    if(ele.children.length===0){
                        return(
                            <div key={ele.id} className="child">
                                <p className="dot"></p>
                                <p className="text">{ele.name}</p>
                            </div>
                        )
                    }
                    else{
                        return(
                                <div key={ele.id} className="wrapper">
                                    <div  onClick={()=>handleClick(ele.id)} className="child expandable">
                                        <p className={`arrow  ${dropList.indexOf(ele.id)!==-1?"open":"closed"}`}>{">"}</p>
                                        <p className="text">{ele.name}</p>
                                    
                                    </div>     
                                    {dropList.indexOf(ele.id)!==-1 ? <Display data={ele.children}/>:null}   
                                </div>                     
                        )
                    }
                })
            }
        </>
    )
}

const Sidebar = ()=>{
    return(
        <div className="sideBarContainer">
            <Display data={menuData}/>
        </div>
        
    )
}

export default Sidebar