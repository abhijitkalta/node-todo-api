// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructuring notation

//used to create object ids
// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost/todoApi', (err, db) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Successfully connected!!');

  db.collection('todos').insertOne({
    text: 'First todo',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo: ' + err);
    };
    console.log(JSON.stringify(result.ops, undefined, 2)); //ops - each mongo document
  });

  db.collection('users').insertOne({
    name: 'Abhijit Kalta',
    age: 25
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user: ' + err);
    };
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2)); //ops - each mongo document
  });

  db.close();
})
