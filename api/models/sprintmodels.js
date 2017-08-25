
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SprintSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  code : {
    type : String,
    required : "Por favor ingrese codigo de coder"
  }
});

module.exports = mongoose.model('Sprints', SprintSchema);