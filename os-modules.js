//built in modules 

//const { userInfo } = require('os')
const os  = require('os')

//give current user info
const userinfo = os.userInfo()
console.log(userinfo)

//return the system uptime result
console.log(os.uptime())

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()

}

console.log(currentOs)
