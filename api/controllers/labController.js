'use strict';


var mongoose = require('mongoose'),
  Coder = mongoose.model('Coders');

exports.list_all_coders = function(req, res) {
  Coder.find({}, function(err, coder) {
    if (err)
      res.send(err);
    res.json(coder);
  });
};




exports.create_a_coder = function(req, res) {
  var new_coder = new Coder(req.body);
  new_coder.save(function(err, coder) {
    if (err)
      res.send(err);
    res.json(coder);
  });
};


exports.read_a_coder = function(req, res) {
  Coder.findById(req.params.coderId, function(err, coder) {
    if (err)
      res.send(err);
    res.json(coder);
  });
};


exports.update_a_coder = function(req, res) {
  Coder.findOneAndUpdate({_id: req.params.coderId}, req.body, {new: true}, function(err, coder) {
    if (err)
      res.send(err);
    res.json(coder);
  });
};


exports.delete_a_coder = function(req, res) {
  Coder.remove({
    _id: req.params.coderId
  }, function(err, coder) {
    if (err)
      res.send(err);
    res.json({ message: 'Coder successfully deleted' });
  });
};

exports.login_a_coder = function(req, res) {
  Coder.find({ username: req.params.userName, password: req.params.password }, function(err, coder) {
    if (err)
      res.send(err);
    res.json(coder);
  });
};
