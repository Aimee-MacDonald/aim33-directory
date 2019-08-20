const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema({
  name: {type: String, required: true},
  address: {type: String, required: true},
  description: {type: String, required: true},
  hours: {type: String, required: true},
  number: {type: String, required: true},
  whatsapp: {type: String, required: true},
  website: {type: String, required: true},
  email: {type: String, required: true}
});

module.exports = mongoose.model("company", schema);
