var Promise = require('bluebird');
var birddb = require('../lib/bird');
fs = Promise.promisifyAll(require('fs'));
moment = require('moment');

var BirdService = {};

BirdService.saveBirds = function (name,family,continents,visible) {
   var created_at = new Date().getTime();
   created_at =  moment(created_at).format('YYYY-MM-DD');
   return birddb.create(name,family,continents,visible,created_at)
};

module.exports = BirdService;
