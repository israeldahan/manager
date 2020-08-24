var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  email: String,
  phone:   String,
  date: { type: Date, default: Date.now }
});

module.exports = userSchema;
