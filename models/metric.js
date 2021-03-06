const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const metricSchema = new Schema({
  user_id: {type: Schema.Types.ObjectId, ref:'user_id'},
  name:String,
  description: String,
  value: Number,
  date: [{Date}]
  
},
{ 
  timestamps: { 
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}
);



const Metric = mongoose.model('Metric', metricSchema);

module.exports = Metric;