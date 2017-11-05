var mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const politicianSchema = new Schema({
  email: {type: String},
  type: String,
  federal: Boolean,
  donors: Array
});

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;