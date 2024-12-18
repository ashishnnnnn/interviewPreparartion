let progressbar_fill = document.querySelector(".progressbar_fill")
let percentageEle = document.querySelector(".quantity")
let percentage = Number(percentageEle.innerText) || 0

console.log(percentage)

function fill(){
    let timeOut = setInterval(() => {
        if(percentage===100){
            clearInterval(timeOut)
        }
        else{
            percentage+=1;
            percentageEle.innerText = percentage;
            progressbar_fill.style.width = `${percentage}%`
        }
    }, 100);
}

fill()