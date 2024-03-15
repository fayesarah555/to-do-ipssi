const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import the Sequelize instance
const User = require('./user'); // Import the User model

const Todo = sequelize.define('Todo', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT, // Define the description column as a TEXT type
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed'),
    defaultValue: 'pending'
  },
  userId: { // Use 'userId' instead of 'UserId'
    type: DataTypes.INTEGER, // Assuming userId is of INTEGER type
    allowNull: false
  }
});

// Define associations
Todo.belongsTo(User); // A todo belongs to a user

sequelize.sync()
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch(err => {
    console.error('Error synchronizing models:', err);
  });

module.exports = Todo;
