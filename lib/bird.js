var Promise = require('bluebird');
var connection = require('../mongo');

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
  })
};

module.exports = BirdDb;
