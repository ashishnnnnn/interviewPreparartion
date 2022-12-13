function checkPassword(success,failed){
    let password = "hbwd";
    if(password==="Ashish"){
        success()
    }
    else{
        failed()
    }
}

let user = {
    name:"Ashish Kumar",
    loginSuccess(){
        console.log(`${this.name}  Welcome`)
    },
    loginFail(){
        console.log(`${this.name} Try Again`)
    }
}


// checkPassword(user.loginSuccess,user.loginFail) -> Chnage this line to make the code working properly


checkPassword(user.loginSuccess.bind(user),user.loginFail.bind(user))