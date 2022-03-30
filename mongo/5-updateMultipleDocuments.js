const MongoClient = require('mongodb').MongoClient
const { URI, dbName } = require('./0-config')

const client = new MongoClient(URI);

async function updateMultipleDocuments() {
    try {
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection('person');

        const filter = { 'email': 'newperson@gmail.com' } // 2 people match

        const updateDoc = {
            $set: {
                'username': 'newperson'
            }
        }

        const result = await collection.updateMany(filter, updateDoc);
        console.log(`Updated ${result.modifiedCount} documents`);

        console.log(result);

    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}