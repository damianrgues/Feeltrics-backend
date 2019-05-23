const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const metricSchema = new Schema({
  _id: String,
  user_id: ObjectID,
  name:String,
  description: String,
  value: Number
});

const metricSchema = mongoose.model('MetricSchema', userSchema);

module.exports = MetricSchema;