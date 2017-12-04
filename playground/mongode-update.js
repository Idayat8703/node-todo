// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
   return   console.log('Unable to connect to MDserver');
  }
  console.log('Connected to mongodb server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a24839d766bcce6d7a49334'),
  }, {
    $set: {
      name: true
    }
  },{
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });



  //db.close();
});
