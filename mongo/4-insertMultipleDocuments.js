const MongoClient = require('mongodb').MongoClient;
const { URI, dbName } = require('./0-config');

const client = new MongoClient(URI);

async function insertMultipleDocuments() {
    try {
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection('person');

        const people = [
            { 'fullname': 'Another', 'email': 'another@gmail.com', 'topicList': [] },
            { 'fullname': 'Other', 'email': 'other@gmail.com', 'topicList': [] }
        ]

        const options = { 'ordered': true };
        const result = await collection.insertMany(people, options);
        console.log(`${result.insertedCount} documents were inserted !`);

        // console.log(result);
        // {
        //     acknowledged: true,
        //     insertedCount: 2,
        //     insertedIds: {
        //         '0': new ObjectId("6243e4b04d429af986cc49f7"),
        //         '1': new ObjectId("6243e4b04d429af986cc49f8")
        //     }
        // }
    } finally {
        await client.close();
    }
}

insertMultipleDocuments().catch(console.dir);