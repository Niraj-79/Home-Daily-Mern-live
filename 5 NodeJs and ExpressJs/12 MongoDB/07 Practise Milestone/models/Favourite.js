const { ObjectId } = require("mongodb");
const { getDb } = require("../util/database-utils");

module.exports = class Favourite {
  constructor(homeId) {
    this.homeId = homeId;
  }

  save() {
    const db = getDb();
    return db.collection('favourites').findOne({homeId: this.homeId}).then(existingFav => {
      if (!existingFav) {
        console.log("Adding to favorites")
        return db.collection('favourites').insertOne(this);
      }
      console.log('Already marked favourite')
      return Promise.resolve();
    })
  }

  static fetchAll() {
    const db = getDb();
    return db.collection("favourites").find().toArray();
  }

  static deleteById(homeId) {
    const db = getDb();
    return db.collection("favourites").deleteOne({ homeId });
  }
};