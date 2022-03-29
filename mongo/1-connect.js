
const { MongoClient } = require('mongodb');
// == import {MongoClient} from 'mongodb'

const { URI } = require('./0-config')
// const config = require('./config) --> Using URI: config.URI

const client = new MongoClient(URI);

async function main() {
    await client.connect();
    console.log("Connecting ... : DONE");
    return 'Completed !';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())

/*
Running Result: 

Connecting ... : DONE
Completed !

*/
