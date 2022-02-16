const mongoose = require("../database");

let mongoose1 = require("mongoose");

var imageSchema = new mongoose1.Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose1.model("Image", imageSchema);
