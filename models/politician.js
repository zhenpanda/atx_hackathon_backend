var mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const politicianSchema = new Schema({
  email: {type: String},
  name: String,
  password: String,
  office: String,
  federal: Boolean,
  donors: Array
});

const ModelClass = mongoose.model('politician', politicianSchema);

module.exports = ModelClass;