const path = require('path')


console.log(path.sep)
// sep = seperator --> Linux: / , Window: \


const filePath = path.join('/content', 'subfolder', 'newName.txt')
console.log(filePath)
// \content\subfolder\newName.txt


const base = path.basename(filePath)
console.log(base)
// newName.txt


const absolute = path.resolve(__dirname, 'newName.txt')
console.log(absolute)
// C:\Users\localadmin\Desktop\node_tutorial\newName.txt
