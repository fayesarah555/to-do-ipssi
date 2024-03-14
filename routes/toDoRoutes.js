// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const toDoController = require('../controllers/toDoController');

router.get('/', toDoController.getAllTodos);
router.post('/', toDoController.createTodo);
router.put('/:id', toDoController.updateTodo);
router.delete('/:id', toDoController.deleteTodo);

module.exports = router;
