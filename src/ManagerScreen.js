// ManagerScreen.js
import React, { useState } from 'react';

const ManagerScreen = ({ user }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ id: '', task: '', assignedTo: {}, status: 'Not Started' });

  const handleCreateTask = () => {
    setTasks([...tasks, { ...newTask, id: `task${tasks.length + 1}` }]);
    setNewTask({ id: '', task: '', assignedTo: {}, status: 'Not Started' });
  };

  const handleAssignTask = (taskId) => {
    const assignedTo = { ...user, id: user.userType.toLowerCase() }; // Assign task to the manager

    setTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, assignedTo } : task))
    );
  };

  const handleReviewTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: 'Not Completed' } : task
      )
    );
  };

  return (
    <div>
      <h1>Welcome {user.name}!</h1>
      <h2>Create Task</h2>
      <input
        type="text"
        placeholder="Task Description"
        value={newTask.task}
        onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
      />
      <button onClick={handleCreateTask}>Create Task</button>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task} - Assigned To: {task.assignedTo.name} - Status: {task.status}
            <button onClick={() => handleAssignTask(task.id)}>Assign</button>
            <button onClick={() => handleReviewTask(task.id)}>Review</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagerScreen;
