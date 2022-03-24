const { readFileSync, writeFileSync } = require('fs')

const firstContent = readFileSync('./file.txt', 'utf8');
console.log(firstContent);
/*
Tram nam trong coi nguoi ta 
Chu tai chu menh kheo la ghet nhau

世の中の百年に
「才」字が「命」字を嫌う
 */

const Tale = "Truyen Kieu"

// 1. Xóa sạch đi rồi viết lại 
writeFileSync('./file.txt',
    ` Hundred of years in human life, ${Tale} `
)

// 2. Append 
writeFileSync('./file.txt',
    "\n Fate is so sad for nice people",
    { flag: 'a' }
)