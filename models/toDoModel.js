const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  task: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

Todo.sync({ alter: true })
  .then(() => {
    console.log('Todo model synced with database.');
  })
  .catch((error) => {
    console.error('Error syncing Todo model with database:', error);
  });

module.exports = Todo;
