const http = require('http')

const server = http.createServer(function (req, res) {
    // console.log(req);
    /*
    url: '/',
    method: 'POST',
    statusCode: null,
    statusMessage: null,
     */

    if (req.url === '/todo/createNewTopic' && req.method === 'POST') {
        res.writeHead('200', { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            "person": {
                person_name: "Tuan Vu",
                age: 22,
                contact: ["facebook", "github", "instagram"]
            }
        }))
    } else {
        // res.writeHead('200', { 'Content-Type': 'application/json' });
        // res.end(JSON.stringify({
        //     "error": {
        //         "method": req.method,
        //         "required_method": "POST",
        //         "url": req.url,
        //         "required_url": '/todo/createNewTopic'
        //     }
        // }))

        res.end(`
        <h1>Oops!</h1>
        <p>Required method: POST, detected: ${req.method}</p>
        <p>Required url: /todo/createNewTopic, detected: ${req.url}</p>
        `)
    }
})

server.listen(8888)