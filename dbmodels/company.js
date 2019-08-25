const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema({
  name: {type: String, required: true},
  category: {type: String, required: true},
  speciality: {type: String, required: true},
  description: {type: String, required: false},
  hours: {type: Object, required: false},
  number: {type: String, required: false},
  whatsapp: {type: String, required: false},
  address: {type: String, required: false},
  website: {type: String, required: false},
  image: {type: String, required: false},
  email: {type: String, required: false},
  password: {type: String, required: false},
  rating: {type: Number, required: false},
  reviews: {type: Array, required: false}
});

module.exports = mongoose.model("company", schema);
