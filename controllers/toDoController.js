// taskController.js

const Task = require('../models/toDoModel');
const jwt = require('jsonwebtoken');
const { verifyToken } = require('../middleware/authenticateUser');

// Route to get all tasks (requires authentication)
exports.getAllTasks = async (req, res) => {
  try {
    // Authenticate user using verifyToken middleware
    verifyToken(req, res, async () => {
      // Fetch tasks based on the user's email
      const tasks = await Task.findAll({ where: { userEmail: req.email } });
      res.json(tasks);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

// Other controller methods...


// Other controller methods...


exports.getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ where: { id, userId: req.userId } });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching task' });
  }
};

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await Task.create({ title, description, userId: req.userId });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating task' });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
    const task = await Task.findOne({ where: { id } });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    task.title = title;
    task.description = description;
    task.status = status;
    await task.save();
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating task' });
  }
};


exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ where: { id} });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    await task.destroy();
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting task' });
  }
};
