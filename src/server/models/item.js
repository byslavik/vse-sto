var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  title: String,
  logo: String,
  coordinates: Array,
  address: String,
  description: String,
  contacts: String
});

module.exports = mongoose.model('Item', ItemSchema);
