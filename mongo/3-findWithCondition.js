const MongoClient = require('mongodb').MongoClient;
const { URI, dbName } = require('./0-config');

const client = new MongoClient(URI);

async function findOneWithCondition() {
    try {
        await client.connect();

        const db = client.db(dbName);
        const personCollection = db.collection('person');

        const findResult = await personCollection.findOne({
            'fullname': 'Albert Einstein'
        })
        // await findResult.foreach(console.dir);
        console.log(findResult)

        console.log(`\n Information about topics of ${findResult.fullname}: `);

        const topicCollection = db.collection('topic_element');
        const topicListId = findResult.topicList;
        var topics = [];

        for (const element of topicListId) {
            const topic = await topicCollection.findOne({ '_id': element });
            topics = [...topics, topic];
        }

        topics.forEach(element => {
            console.log(element);
        })


    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

findOneWithCondition();