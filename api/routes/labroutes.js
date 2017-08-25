'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/labController.js');
  var jediRoute = require('../controllers/jediController.js');
  var sprintRoute = require('../controllers/sprintController.js');

   // todoList Routes
  app.route('/coders')
    .get(todoList.list_all_coders)
    .post(todoList.create_a_coder);


  app.route('/coders/:coderId')
    .get(todoList.read_a_coder)
    .put(todoList.update_a_coder)
    .delete(todoList.delete_a_coder);

  app.route('/jedis')
    .get(todoList.list_all_jedis)
    .post(todoList.create_a_jedi);


  app.route('/jedis/:jediId')
    .get(todoList.read_a_jedi)
    .put(todoList.update_a_jedi)
    .delete(todoList.delete_a_jedi);

  app.route('/sprints')
    .get(todoList.list_all_sprints)
    .post(todoList.create_a_sprint);


  app.route('/sprints/:sprintId')
    .get(todoList.read_a_sprint)
    .put(todoList.update_a_sprint)
    .delete(todoList.delete_a_sprint);
 
};

