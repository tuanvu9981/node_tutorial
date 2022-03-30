const MongoClient = require('mongodb').MongoClient;
const { URI, dbName } = require('./0-config')

const client = new MongoClient(URI);

async function insertNewDocument() {
    try {
        await client.connect();
        const db = client.db(dbName);
        const personCollection = db.collection('person');

        // create a new document to insert
        const newPerson = {
            'fullname': 'New Person',
            'email': 'newperson@gmail.com',
            'username': 'newperson123',
            'avatarLink': 'default_image.png',
            'topicList': [],
        }

        const result = await personCollection.insertOne(newPerson);
        console.log(`New document inserted with ID: ${result.insertedId}`);


        // console.log(result);
        // {
        //     acknowledged: true,
        //     insertedId: new ObjectId("6243e25cf61d30d4562cc32f")
        // }
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
}

insertNewDocument();