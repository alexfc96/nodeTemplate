"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoints
 */

/**
 * @swagger
 * /tasks:
 * get:
 *  summary: Get all tasks
 *  tag: [Tasks]
 */

router.get('/tasks', _tasks.getTasks); // router.get('/tasks/count', getTaskCount);

/**
 * @swagger
 * /tasks:
 * get:
 *  summary: Get one task
 *  tag: [Tasks]
 */

router.get('/tasks/:idTask', _tasks.getTask);
/**
 * @swagger
 * /tasks:
 * post:
 *  summary: Create new task
 *  tag: [Tasks]
 */

router.post('/tasks', _tasks.saveTask);
/**
 * @swagger
 * /tasks:
 * put:
 *  summary: Update one task
 *  tag: [Tasks]
 */

router.put('/tasks/:idTask', _tasks.updateTask);
/**
 * @swagger
 * /tasks:
 * delete:
 *  summary: Delete one task
 *  tag: [Tasks]
 */

router["delete"]('/tasks/:idTask', _tasks.deleteTask);
var _default = router;
exports["default"] = _default;