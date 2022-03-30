const MongoClient = require('mongodb').MongoClient;
const { URI, dbName } = require('./0-config')

const client = new MongoClient(URI);

async function deleteOneDocument() {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('person');

        const query = { 'fullname': 'Other' }

        const result = await collection.deleteOne(query);

        if (result.deletedCount === 1) {
            console.log("DELETION: 1");
        } else {
            console.log("No matched ! DELETION: 0");
        }
    } catch (error) {
        console.log(error);
    } finally {
        client.close();
    }
}

deleteOneDocument();
