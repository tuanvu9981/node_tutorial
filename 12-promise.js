const { readFileSync, readFile, writeFileSync } = require('fs')

const getText = (path) => {
    return new Promise(function (resolve, reject) {
        readFile(path, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    })
}

// getText('./10-file/file.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

const start = async () => {
    const first = await getText('./10-file/file.txt');
    console.log(first)
}

start()