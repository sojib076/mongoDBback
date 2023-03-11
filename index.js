// const fs = require('fs');
// const MongoClient = require('mongodb').MongoClient;
// async function saveMongoDBDataAsJSON(databaseName, collectionName, filePath,dburl) {
//   const client = await MongoClient.connect(dburl, { useUnifiedTopology: true });
//   const db = client.db(databaseName);
//   const collection = db.collection(collectionName);
//   const data = await collection.find().toArray();
//   const jsonData = JSON.stringify(data);
//   fs.writeFile(filePath, jsonData, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });
//   client.close();
// }
// // Usage example
// const databaseName = 'sojib';
// const collectionName = 'sojibproject';
// const filePath = databaseName + '_' + collectionName + '.json';
// const dburl = 'mongodb+srv://sojibgo:sojibgo@cluster0.eybr6od.mongodb.net/?retryWrites=true&w=majority'
// saveMongoDBDataAsJSON(databaseName, collectionName, filePath,dburl);
const { exec } = require('child_process');

function backupMongoDB(url, databaseName, backupPath) {
  try {
    const command = `mongoexport --uri ${url} --db ${databaseName} --out ${backupPath}`;
    console.log(`Running command: ${command}`);
    exec(command, (error, sussess,) => {
      if (error) {
        console.error(`Backup failed: ${error}`);
      } else {
        console.log(`Backup successful: ${sussess}`);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
}

// Usage example
const dburl = 'mongodb+srv://sojibgo:sojibgo@cluster0.eybr6od.mongodb.net/?retryWrites=true&w=majority'
const databaseName = 'sojib';
const backupPath = '/folder';
backupMongoDB(dburl, databaseName, backupPath);