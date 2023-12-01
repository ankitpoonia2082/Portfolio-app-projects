// Portfolio Application contact form data

const { MongoClient } = require("mongodb");

// Connection String
const uri = "mongodb://localhost:27017.portfolio/users";

const client = new MongoClient(uri);

module.exports = {
  connectToDb() {
    MongoClient.connect(uri, function (err, db) {
      if (err) throw err;
      console.log("Database connected!");
      db.close();
    });
  },
  getDb() {},
};
