var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Student = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  },
  age: {
    type: Number
  }
},{
    collection: 'students'
});

module.exports = mongoose.model('Student', Student);