var status = 40

setTimeout(() => {
    const status = 30
    const data = {
        status : 20,
        getStatus(){
            return this.status
        }
    }
    console.log(data.getStatus());
    console.log(data.getStatus.call(this))
}, 0);

//  20
// 40 -> In browser