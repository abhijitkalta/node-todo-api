// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb'); //destructuring notation

//used to create object ids
// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost/todoApi', (err, db) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Successfully connected!!');


  db.collection('todos').findOneAndUpdate({
      completed: false
    }, {
      $set: { //updte operators, set is needed in case of mongodb but not in case of mongoose
        text: 'Updated todo'
      }
    }, {
      returnOriginal: false //needs to be set false, in order to return updated document, default - true
    })
    .then((todo) => {
      console.log(JSON.stringify(todo, undefined, 2));
    }, (err) => {
      console.log(err);
    });

  db.collection('users').findOneAndUpdate({
      name: 'Abhijit Kalta'
    }, {
      $set: { //updte operators, set is needed in case of mongodb but not in case of mongoose
        name: 'abhijit kalta'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false //needs to be set false, in order to return updated document, default - true
    })
    .then((todo) => {
      console.log(JSON.stringify(todo, undefined, 2));
    }, (err) => {
      console.log(err);
    });

  db.close();
})
