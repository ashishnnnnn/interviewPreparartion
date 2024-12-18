function circleType(diceNo,index){
    if(diceNo===1){
        if(index===5){
            return "fill"
        }
        return "notFill"
    }
    else if(diceNo===2){
        if(index===1 || index===9){
            return "fill"
        }
        return "notFill"
    }
    else if(diceNo===3){
        if(index===1 || index===5 || index===9){
            return "fill"
        }
        return "nonFill"
    }
    else if(diceNo===4){
        if(index===1 || index===3 || index===7 || index===9){
            return "fill"
        }
        return "nonFill"
    }
    else if(diceNo===5){
        if(index===1 || index===3 || index===7 || index===9 || index===5){
            return "fill"
        }
        return "nonFill"
    }
    else if(diceNo===6){
        if(index===1 || index===3 || index===7 || index===9 || index===4 || index===6){
            return "fill"
        }
        return "nonFill"
    }
}

function fillDice(node,diceNo){
    for(let i=1;i<=9;i++){
        let type = circleType(diceNo,i);
        let ele = document.createElement("div")
        ele.classList.add("dot")
        if(type==="fill"){
            ele.classList.add("fill")
        }
        node.appendChild(ele)
    }
}


function doGame(){
    let num1 = Math.floor(Math.random()*6) + 1;
    let num2 = Math.floor(Math.random()*6) + 1;

    let dice1 = document.querySelector(".dice1")
    let dice2 = document.querySelector(".dice2")
    dice1.innerHTML = ""
    dice2.innerHTML = ""
    fillDice(dice1,num1)
    fillDice(dice2,num2)
    let tag = document.querySelector(".status")
    if(num1===num2){
        tag.innerHTML = "Draw"
    }
    else if(num1>num2){
        tag.innerHTML = "Player one win"
    }
    else{
        tag.innerHTML = "Player two win"
    }
}

let btn = document.querySelector(".btn")

btn.addEventListener("click",doGame)

doGame()