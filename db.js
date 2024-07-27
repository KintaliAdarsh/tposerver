const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(
      "mongodb+srv://mailadarsh4123:Adarsh%401234@cluster0.ombipfq.mongodb.net/ecommerce-app"
    )
      .then((client) => {
        dbConnection = client.db("tpo");
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => {
    return dbConnection;
  },
};
