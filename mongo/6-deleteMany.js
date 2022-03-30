const MongoClient = require('mongodb').MongoClient;
const { URI, dbName } = require('./0-config')

const client = new MongoClient(URI);

async function deleteMultipleDocument() {
    try {
        await client.connect()

        const database = client.db(dbName);
        const collection = database.collection('person');

        const query = {
            'email': 'newperson@gmail.com',
        }

        const result = await collection.deleteMany(query);
        // console.log(result);
        // { acknowledged: true, deletedCount: 2 }

        console.log(`Deleted ${result.deletedCount} documents\n`);

    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

deleteMultipleDocument();