const inputBar = document.querySelector(".searchBar")
const resultContainer = document.querySelector(".resultContainer")


function debounce(callback,delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            callback(...args)
        },delay)
    }
}

function throatling(callback,delay){
    let flag = true;
    return function(...args){
        if(flag){
            flag = false;
            callback(...args);
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}

function doFetch(val){
    return fetch(`https://swapi.dev/api/people/?search=${val}`)
        .then((res)=>res.json())
        .then((data)=>{
            return data.results || []
        })
        .catch((err)=>{
            console.log("There is an error",err)
            return []
        })
}

const debouncedFetch = throatling((val)=>{
    doFetch(val).then((data)=>{
        if(data.length>0){
            data.forEach(ele => {
                const bar = document.createElement("div")
                bar.classList.add("searchResult")
                bar.innerText = ele.name;
                resultContainer.appendChild(bar)
            });
        }
    })
},600)



inputBar.addEventListener("input",function(e){
    let val = e.target.value;
    resultContainer.innerHTML = ""
    if(val.length>0){
        debouncedFetch(val)
    }
    else{
        resultContainer.innerHTML = ""
    }
})