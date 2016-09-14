var Promise = require('bluebird');
var connection = require('../mysql');

var BirdDb = {};

BirdDb.create = function(username,email,name,profile_url,created_at,updated_at,hash) {
  console.log("userdb is called");
  return new Promise(function(resolve,reject) {
    var user = {};
    user.username = username;
    user.email = email;
    user.password = '';
    user.name = name;
    user.profile_url = profile_url;
    user.created_at = created_at;
    user.updated_at = updated_at;

    connection.query('INSERT INTO Users SET ? ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)',user, function(err,result) {
       if(!err) {
         console.log("success saving user info",result);
         resolve(result);
       } else {
         console.log("failure saving user info",err);
         reject(err);
       }
    })
  })
};

module.exports = BirdDb;
