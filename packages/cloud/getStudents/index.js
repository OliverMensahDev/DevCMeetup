const { MongoClient } = require('mongodb');

const DB_URL = process.env['DB_URL']
const dbInstance = new MongoClient(DB_URL)

async function getStudents() {
    await dbInstance.connect();
    let users = await dbInstance.db('brightfield').collection('students').find().toArray();
    return {
        "body": users
    }

}

exports.main = getStudents