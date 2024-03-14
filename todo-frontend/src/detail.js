import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function TaskDetailPage() {
  const { taskId } = useParams();
  const [task, setTask] = useState({});
  const [updatedTask, setUpdatedTask] = useState('');

  const fetchTask = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/todos/${taskId}`);
      setTask(response.data);
    } catch (error) {
      console.error('Error fetching task details:', error);
    }
  }, [taskId]); // Include taskId as a dependency

  useEffect(() => {
    fetchTask();
  }, [fetchTask]); // Include fetchTask in the dependency array

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/todos/${taskId}`, { task: updatedTask });
      fetchTask();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h1>Task Details</h1>
      <div>
        <p>Task ID: {task.id}</p>
        <p>Task: {task.task}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
        />
        <button type="submit">Update Task</button>
      </form>
      {/* Button to navigate back to home */}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default TaskDetailPage;
