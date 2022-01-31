const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: String,
  },
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
