const express = require('express');
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.post('/todo/createNewTopic', (request, response) => {
    console.log(request.body);
})