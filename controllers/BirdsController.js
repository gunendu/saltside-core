var Promise = require('bluebird');
var birdService = require('../services/BirdService');
var birddb = require('../lib/bird');
var _ = require('underscore');

var BirdsController = {};

BirdsController.saveBird = function(name,family,continents,visible) {
   return birdService.saveBirds(name,family,continents,visible)
     .then(function(result) {
        return result
     })
     .catch(function(e) {
        console.log(e.stack);
     })
};

BirdsController.getAllBirds = function() {
  return birddb.getAllBirds()
}

BirdsController.getBirdById = function(id) {
  return birddb.getBirdById(id)
}

BirdsController.deleteById = function(id) {
  return birddb.deleteById(id);
}

module.exports = BirdsController;
