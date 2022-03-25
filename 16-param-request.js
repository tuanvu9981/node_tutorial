const http = require('http')
const url = require('url')

//REQUIRED: request.data has NO SPACE 

const server = http.createServer((req, res) => {
    const data = url.parse(req.url, true).query;
    console.log(data);
    // req.on('end', () => {
    if (req.method === 'POST' &&
        req.url === `/todo/createNewTopic?person_dob=${data.person_dob}&person_name=${data.person_name}`) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(
            JSON.stringify({
                "person": {
                    person_name: data.person_name,
                    person_dob: data.person_dob,
                    contact: ["facebook", "github", "instagram"]
                }
            })
        )
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            "error": {
                "method": req.method,
                "required_method": "POST",
                "url": req.url,
                "required_url": `/todo/createNewTopic?person_dob=${data.person_dob}&person_name=${data.person_name}`
            }
        }))
        //     }
        // )
    }
})

server.listen(8888)

//REQUIRED: request.data has NO SPACE 