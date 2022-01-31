"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: String
});
var Task = mongoose.model('Task', taskSchema);
module.exports = Task;