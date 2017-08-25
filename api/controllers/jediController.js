'use strict';


var mongoose = require('mongoose'),
  Jedi = mongoose.model('Jedis');

exports.list_all_jedis = function(req, res) {
  Jedi.find({}, function(err, jedi) {
    if (err)
      res.send(err);
    res.json(jedi);
  });
};




exports.create_a_jedi = function(req, res) {
  var new_jedi = new Jedi(req.body);
  new_jedi.save(function(err, jedi) {
    if (err)
      res.send(err);
    res.json(jedi);
  });
};


exports.read_a_jedi = function(req, res) {
  Jedi.findById(req.params.jediId, function(err, jedi) {
    if (err)
      res.send(err);
    res.json(jedi);
  });
};


exports.update_a_jedi = function(req, res) {
  Jedi.findOneAndUpdate({_id: req.params.jediId}, req.body, {new: true}, function(err, jedi) {
    if (err)
      res.send(err);
    res.json(jedi);
  });
};


exports.delete_a_jedi = function(req, res) {


  Jedi.remove({
    _id: req.params.jediId
  }, function(err, jedi) {
    if (err)
      res.send(err);
    res.json({ message: 'Jedi successfully deleted' });
  });
};
