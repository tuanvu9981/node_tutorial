const http = require('http')

const server = http.createServer((req, res) => {
    var data = '';
    req.on('data', req_data => {
        // console.log(`Received: ${req_data}`);
        data = JSON.parse(req_data);
        // req_data: --> store separately in buffer --> JSON.parse
        // console.log(data);
    })
    req.on('end', () => {
        if (req.method === 'POST' && req.url === '/todo/createNewTopic') {
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
                    "required_url": '/todo/createNewTopic'
                }
            }))
        }
    })
})

server.listen(8888)