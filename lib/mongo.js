var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';
var dbCon;

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  dbCon = db;
  db.close();
});

module.exports = dbCon;
