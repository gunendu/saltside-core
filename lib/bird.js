var Promise = require('bluebird');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';
var _ = require("underscore");
var objectId = require("objectid");

var BirdDb = {};

BirdDb.create = function(name,family,continents,visible,created_at) {
  return new Promise(function(resolve,reject) {
    var bird = {};
    bird.name = name;
    bird.family = family;
    bird.added = created_at;
    bird.visible = visible;
    MongoClient.connect(url, function(err, db) {
      if (err) {
        console.log("mongodb connct fail");
        reject(err)
      } else {
        db.collection('bird',function(err,col){
        col.insert(bird, function(err,rec){
          var response = rec["ops"][0];
          console.log("response is",response);
          var mongoId = response["_id"];
          col.update({_id: mongoId}, { $addToSet : {"continents": {$each: continents }} }, function(err,result) {
            response.continents = _.uniq(continents);
            resolve(response);
          })
        })
        })
      }
    })
    })
};

BirdDb.getAllBirds = function() {
  return new Promise(function(resolve,reject) {
  MongoClient.connect(url, function(err, db) {
     db.collection('bird',function(err,col){
        col.find({"visible":true},{_id:1}).toArray(function(err,response) {
          var items = [];
          _.each(response,function(res){
              items.push(res._id);
          });
           resolve(items);
        });
     })
  })
  })
};


BirdDb.getBirdById = function(id) {
  return new Promise(function(resolve,reject)  {
    MongoClient.connect(url, function(err, db) {
      db.collection('bird',function(err,col) {
        if(objectId.isValid(id)){
         col.findOne({"_id":objectId(id)},function(err,response) {
            console.log("response is",response,err);
              resolve(response);
         })
       } else {
         reject({})
       }
      })
    });
  })
};

BirdDb.deleteById = function(id) {
  return new Promise(function(resolve,reject) {
    MongoClient.connect(url, function(err,db) {
      db.collection('bird',function(err,col) {
        if(objectId.isValid(id)) {
          col.remove({"_id":objectId(id)},function(err,response) {
             if(!err) {
               console.log("response",err,response.result);
               if(response.result.n) {
                 resolve({})
               } else {
                 reject({})
               }
             }
          })
        } else {
          reject({})
        }
      })
    })
  })
}

module.exports = BirdDb;
