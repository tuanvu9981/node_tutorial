const os = require('os');

//info about current user
const user = os.userInfo()
console.log(user)
// {
//   uid: -1,
//   gid: -1,
//   username: 'localadmin',
//   homedir: 'C:\\Users\\localadmin',
//   shell: null
// }

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)
// {
//     name: 'Windows_NT',
//     release: '10.0.19043',
//     totalMem: 16915320832,
//     freeMem: 8341737472
// }