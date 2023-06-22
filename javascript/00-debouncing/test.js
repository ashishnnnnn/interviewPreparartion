let count = 0;

function callApi(){
    console.log("Api being called ",count++);
}

function debounce(cb,time){
    let timeout;
    return (()=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            cb();
        },[time])
    })
}

function throtal(cb,time){
    let call = true
    return(()=>{
        if(call){
            call = false;
            cb();
            setTimeout(() => {
                call = true;
            }, time);
        }
    })
}

const mydebounce = debounce(callApi,500)

const myThrotal = throtal(callApi, 500)