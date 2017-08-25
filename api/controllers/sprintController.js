'use strict';


var mongoose = require('mongoose'),
  Sprint = mongoose.model('Sprints');

exports.list_all_sprints = function(req, res) {
  Sprint.find({}, function(err, sprint) {
    if (err)
      res.send(err);
    res.json(sprint);
  });
};




exports.create_a_sprint = function(req, res) {
  var new_sprint = new Sprint(req.body);
  new_sprint.save(function(err, sprint) {
    if (err)
      res.send(err);
    res.json(sprint);
  });
};


exports.read_a_sprint = function(req, res) {
  Sprint.findById(req.params.sprintId, function(err, sprint) {
    if (err)
      res.send(err);
    res.json(sprint);
  });
};


exports.update_a_sprint = function(req, res) {
  Sprint.findOneAndUpdate({_id: req.params.sprintId}, req.body, {new: true}, function(err, sprint) {
    if (err)
      res.send(err);
    res.json(sprint);
  });
};


exports.delete_a_sprint = function(req, res) {


  Sprint.remove({
    _id: req.params.sprintId
  }, function(err, sprint) {
    if (err)
      res.send(err);
    res.json({ message: 'Sprint successfully deleted' });
  });
};
