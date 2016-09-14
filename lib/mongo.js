var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';

var dbCon;

MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log("mongodb connct fail");
  } else {
    console.log("Connected correctly to mongo server.",err);
    dbCon = db;
  }
});

module.exports = dbCon;
