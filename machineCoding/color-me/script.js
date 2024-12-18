let keys = [1,2,3,4,5,6,7,8,9]
console.log("Hello")
let element = document.querySelector(".digitsContainer");
keys.forEach((ele)=>{
    let ele1 = document.createElement('div');
    ele1.classList.add(`keys`);
    ele1.classList.add(`keys${ele}`)
    ele1.innerText = `${ele}`;
    element.appendChild(ele1)
})

let form = document.querySelector(".form")
let input = document.querySelector(".form input")

form.addEventListener("submit",function(event){
    event.preventDefault();
    const val = input.value;
    keys.forEach((ele)=>{
        const currNode = document.querySelector(`.keys${ele}`);
        currNode.style.backgroundColor = "gray"
    })
    const currNode = document.querySelector(`.keys${val}`);
    currNode.style.backgroundColor = "green"
})