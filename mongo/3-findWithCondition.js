const MongoClient = require('mongodb').MongoClient;
const { URI, dbName } = require('./0-config');

const client = new MongoClient(URI);

async function findOneWithCondition() {
    try {
        await client.connect();

        const db = client.db(dbName);
        const personCollection = db.collection('person');

        const findResult = personCollection.findOne({
            'fullname': 'Albert Einstein'
        })
    } catch (error) {
        console.log(error);
    }
}