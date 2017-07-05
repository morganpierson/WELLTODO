"use strict";
const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  title: String,
  text: String,
  completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;