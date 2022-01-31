import { Router } from 'express';
import { getTaskCount, getTasks, getTask, saveTask, deleteTask, updateTask } from '../controllers/tasks'

const router = Router()
/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoints
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *   summary: Get all tasks
 *   tags: [Tasks]
 */
router.get('/tasks', getTasks);

// router.get('/tasks/count', getTaskCount);

/**
 * @swagger
 * /tasks/id:
 *  get:
 *   summary: Get one task
 *   tags: [Tasks]
 */
router.get('/tasks/:idTask', getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *   summary: Create new task
 *   tags: [Tasks]
 */
router.post('/tasks', saveTask);

/**
 * @swagger
 * /tasks:
 *  put:
 *   summary: Update one task
 *   tags: [Tasks]
 */
router.put('/tasks/:idTask', updateTask);

/**
 * @swagger
 * /tasks:
 *  delete:
 *   summary: Delete one task
 *   tags: [Tasks]
 */
router.delete('/tasks/:idTask', deleteTask);

export default router
