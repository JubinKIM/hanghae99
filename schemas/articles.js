const mongoose = require("mongoose");

const { Schema } = mongoose;
const articlesSchema = new Schema({
  usersId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,  
  },
  date: {
    type: Date,
    default: Date.now,
  },
  text: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
  
});

module.exports = mongoose.model("articles", articlesSchema);