var Promise = require('bluebird');
var userdb = require('../lib/user/user');
fs = Promise.promisifyAll(require('fs'));
moment = require('moment');

var BirdService = {};

BirdService.saveUser = function (username,email,name,profile_url,hash) {
   var created_at = new Date().getTime();
   created_at =  moment(created_at).format('YYYY-MM-DD HH:mm:ss');
   var updated_at = moment(updated_at).format('YYYY-MM-DD HH:mm:ss');
   return userdb.create(username,email,name,profile_url,created_at,updated_at)
};

module.exports = BirdService;
