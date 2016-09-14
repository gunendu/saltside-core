var Promise = require('bluebird');
var birdService = require('../services/BirdService');
var birddb = require('../lib/bird');
var _ = require('underscore');

var BirdsController = {};

BirdsController.saveBird = function(username,email,name,profile_url) {
   return birdService.saveUser(username,email,name,profile_url)
     .then(function(result) {
     })
     .then(function(result) {
     })
     .catch(function(e) {
        console.log(e.stack);
     })
};

module.exports = BirdsController;
