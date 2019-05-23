const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema({
  _id: ObjectID,
  username: String,
  email:String,
  password: String,
  metrics: [ObjectID]
});

const daySchema = mongoose.model('daySchema', userSchema);

module.exports = daySchema;