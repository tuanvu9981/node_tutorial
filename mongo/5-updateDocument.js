const MongoClient = require('mongodb').MongoClient;
const { URI, dbName } = require('./0-config');

const client = new MongoClient(URI);

async function updateOneDocument() {
    try {
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection('person');

        const filter = { fullname: 'Another' }
        const updateDocument = {
            $set: {
                email: 'hiragana_katakana@gmail.com'
            }
        }

        const result = await collection.updateOne(filter, updateDocument);
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} documents \n`
        );

        // console.log(result);
        // {
        //     acknowledged: true,
        //     modifiedCount: 0,
        //     upsertedId: null,
        //     upsertedCount: 0,
        //     matchedCount: 1
        // }

    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

updateOneDocument();