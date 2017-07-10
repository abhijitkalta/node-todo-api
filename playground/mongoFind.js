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

  db.collection('todos').find().toArray() //find returns a cursor, hence toArray is used on it
  .then((todos) => {
    console.log(JSON.stringify(todos, undefined, 2));
  }, (err) => {
    console.log(err);
  })

  db.collection('todos').find().count()
  .then((count) => {
    console.log(JSON.stringify(count, undefined, 2));
  }, (err) => {
    console.log(err);
  })

  db.close();
})
