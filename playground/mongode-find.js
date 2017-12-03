// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
   return   console.log('Unable to connect to MDserver');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').find({_id:
  //   new ObjectID('5a247cfa766bcce6d7a4932f')
  //     }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined,2));
  // },(err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find(
  // ).count().then((count) => {
  //   console.log(`Todos Count' ${count}`);
  //
  // },(err) => {
  //   console.log('Unable to fetch todos', err);
  // });


  db.collection('User').find({name: 'Idayat'}).toArray().then((name) =>{
      console.log(JSON.stringify(name,undefined,2 ));
  });
  //db.close();
});
