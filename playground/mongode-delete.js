// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
   return   console.log('Unable to connect to MDserver');
  }
  console.log('Connected to mongodb server');

  // db.collection('User').deleteMany({
  //   name: 'Bola'
  // }).then((res) => {
  //   console.log(res);
  // });


  db.collection('User').deleteOne(
    {_id: new ObjectID('5a2477f463506c2a5a2ee218')
  }).then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
  });


  //db.close();
});
