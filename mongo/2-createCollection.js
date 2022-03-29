const MongoClient = require('mongodb').MongoClient;
const { URI } = require('./0-config');
const dbName = require('./0-config');
//--> MUST BE EXACTLY UPPERCASE AND LOWERCASE

const client = new MongoClient(URI);

async function main() {
  await client.connect();
  const db = client.db(dbName);

  const result = await db.createCollection('customers');
  console.log("New Collection Creating ... : DONE ");
  return result;
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())

/*
Result: 

New Collection Creating ... : DONE
Collection {
  s: {
    db: Db { s: [Object] },
    options: {
      raw: false,
      promoteLongs: true,
      promoteValues: true,
      promoteBuffers: false,
      ignoreUndefined: false,
      bsonRegExp: false,
      serializeFunctions: false,
      fieldsAsRaw: {},
      enableUtf8Validation: true,
      writeConcern: [WriteConcern],
      readPreference: [ReadPreference]
    },
    namespace: MongoDBNamespace { db: 'myFirstDatabase', collection: 'customers' },
    pkFactory: { createPk: [Function: createPk] },
    readPreference: ReadPreference {
      mode: 'primary',
      tags: undefined,
      hedge: undefined,
      maxStalenessSeconds: undefined,
      minWireVersion: undefined
    },
    bsonOptions: {
      raw: false,
      promoteLongs: true,
      promoteValues: true,
      promoteBuffers: false,
      ignoreUndefined: false,
      bsonRegExp: false,
      serializeFunctions: false,
      fieldsAsRaw: {},
      enableUtf8Validation: true
    },
    readConcern: undefined,
    writeConcern: WriteConcern { w: 'majority' }
  }
}
*/