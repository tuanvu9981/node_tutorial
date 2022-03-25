const EventEmitter = require('events');

const customEmitter = new EventEmitter();
// emit (v) phát ra

function1 = () => {
    console.log("Data received !");
}

function2 = () => {
    console.log("Some other logic\n\n")
}

function3 = (person_name, person_dob) => {
    const person = {
        'person_name': person_name,
        'person_dob': person_dob,
        'topic_list': [
            { 'topic_id': 1, 'topic_name': 'Learning mongoDB' },
            { 'topic_id': 2, 'topic_name': 'Learning to use Redis' }
        ]
    }
    console.log(JSON.stringify(person));
}

customEmitter.on('response', function1);
customEmitter.on('response', function2);
customEmitter.on('my_own_emitter', function3)

// FIRST EMIT 
customEmitter.emit('response')

// SECOND MY EMIT
customEmitter.emit('my_own_emitter', 'TuanVu', '2000-12-23')

// REMOVE ONE EMIT LISTENER (listener is a function)
// customEmitter.removeListener('response', function1);
// customEmitter.emit('response')

// REMOVE ALL LISTENER 
customEmitter.removeAllListeners('response');
customEmitter.emit('response')