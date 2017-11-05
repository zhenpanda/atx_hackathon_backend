var mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String},
  password: String,
  address: String,
  phone: Number
});

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;
