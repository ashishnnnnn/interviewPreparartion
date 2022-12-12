//  What will be the output.

const settings = {
    username:"Ashish",
    level:19,
    health:20
}

const data = JSON.stringify(settings,["level","health"]);

console.log(data)

//  So it will stringfy only the two property of setting that is level and health.

