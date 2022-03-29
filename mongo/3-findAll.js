const MongoClient = require('mongodb').MongoClient;
const { URI } = require('./0-config');
const { dbName } = require('./0-config');

const client = new MongoClient(URI);

async function run() {
    try {
        await client.connect();
        console.log('Connecting ... : DONE');

        const db = client.db(dbName);
        const collection = db.collection('person');

        const findResult = collection.find({}); //Return a Cursor Object
        await findResult.forEach(console.dir); //forEach: function of Cursor Object

        //console.log(JSON.stringify(findResult));
    }
    catch (error) {
        throw error;
    } finally {
        client.close()
    }
}

run();