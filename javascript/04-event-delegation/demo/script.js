const grandParent = document.querySelector(".grand-parent")

const parent = document.querySelector(".parent")

const child = document.querySelector(".child")

// Part - 1 

// To show event Bubbling -------

// grandParent.addEventListener("click",function(){
//     alert("grandParent")
// })

// parent.addEventListener("click",function(){
//     alert("parent")
// })

// child.addEventListener("click",function(){
//     alert("child")
// })

// Part - 2

// Difference between event.target , event.currentTarget

//  we can replace event.currentTarget by this

// grandParent.addEventListener("click",func)

// parent.addEventListener("click",func)

// child.addEventListener("click",func)

// function func(event){
//     alert("currentTarget = "+event.currentTarget.innerText +" target "+event.target.innerText)
// }

// Part - 3

// Event trickling 

// grandParent.addEventListener("click",function(){
//     alert("grandParent")
// },{capture:true})

// parent.addEventListener("click",function(){
//     alert("parent")
// },{capture:true})

// child.addEventListener("click",function(){
//     alert("child")
// },{capture:true})

// Part - 4

//  With using event bubbling , create such that when we click of child, first parent will be called , then child and then grandParent

grandParent.addEventListener("click",function(){
    alert("grandParent")
},{capture:false})

parent.addEventListener("click",function(){
    alert("parent")
},{capture:true})

child.addEventListener("click",function(){
    alert("child")
},{capture:false})

