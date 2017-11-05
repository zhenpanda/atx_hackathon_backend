var mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String},
  password: String,
  address: String,
  phone: Number,
  politicians: [{name: String, amount: Number}]
});

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;
