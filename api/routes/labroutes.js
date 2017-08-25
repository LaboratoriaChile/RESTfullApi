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
    .get(jediRoute.list_all_jedis)
    .post(jediRoute.create_a_jedi);


  app.route('/jedis/:jediId')
    .get(jediRoute.read_a_jedi)
    .put(jediRoute.update_a_jedi)
    .delete(jediRoute.delete_a_jedi);

  app.route('/sprints')
    .get(sprintRoute.list_all_sprints)
    .post(sprintRoute.create_a_sprint);


  app.route('/sprints/:sprintId')
    .get(sprintRoute.read_a_sprint)
    .put(sprintRoute.update_a_sprint)
    .delete(sprintRoute.delete_a_sprint);

  app.route('/login')
    .get(todoList.login_a_coder)
 
};

