const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');

var id = '5a249086b9e9b74c681fad06';

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todos) => {
  console.log('Todo', todos);
});
