var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({
        'person': {
            'person_id': 1234,
            'person_name': 'Tuan Vu',
            'person_dob': '2000-12-23'
        },
        'topic': {
            'topic_name': "Network Programming",
            'taskList': [
                { "task_name": "Doing homework", "deadline": "2022-12-23" },
                { "task_name": "Prepare slide ", "deadline": "2022-10-2" }
            ]
        }
    }));
}).listen(8888);