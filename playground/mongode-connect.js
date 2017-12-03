// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
   return   console.log('Unable to connect to MDserver');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('User').insertOne({
  //
  //   name: 'Idayat',
  //   age: 25,
  //   location: 'Cali'
  // }, (err, result) => {
  //     if (err) {
  //       return console.log('Unable to add to the server');
  //     }
  //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});
