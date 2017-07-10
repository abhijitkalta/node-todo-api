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

  db.collection('todos').deleteMany({})
  .then((todos) => {
    console.log(JSON.stringify(todos, undefined, 2)); // ok: 1, n: 3  -- ok -1 means success, n -3 means number of documents deleted
  }, (err) => {
    console.log(err);
  });

  db.collection('todos').deleteOne({completed: false})
  .then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2)); // ok: 1, n: 1
  }, (err) => {
    console.log(err);
  });

  db.collection('todos').findOneAndDelete({completed: false})
  .then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2)); // provides additional info about the document that is deleted
  }, (err) => {
    console.log(err);
  });

  db.close();
})
