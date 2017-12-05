const{SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = '123gfs';
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });

});

var hashedPwd = '$2a$10$2tIAR4I9ZwB.NfKa0yceG.fDU0OCTs8bfVgh7VvxA6Bnvq5r9FQWy';


bcrypt.compare(password, hashedPwd, (err, res) => {
  console.log(res);
});


// var token = jwt.sign(data, '123abc');
// console.log(token);
// var decoded =jwt.verify(token, '123abc');
// console.log('decoded', decoded);
//
// // var message = 'I am user number 3';
// //
// // var hash = SHA256(message).toString();
// //
// // console.log(`Message ${message}`);
// // console.log(`Hash: ${hash}`);
// //
// //
// //
// // var token= {
// //   data: data,
// //   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// // };
// //
// //
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data) ).toString();
// //
// // var resulthash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// //
// // if (resulthash === token.hash) {
// //   console.log('Data was not changed');
// // }else {
// //   console.log('Data was changeddont trust');
// // }
