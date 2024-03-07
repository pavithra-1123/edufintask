// DeveloperScreen.js
import React, { useState } from 'react';


const DeveloperScreen = ({ user }) => {
  const [tasks, setTasks] = useState([]);

  const handleStartTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: 'In Progress' } : task
      )
    );
  };

  const handleCompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: 'Completed' } : task
      )
    );
  };

  return (
    <div>
      <h1>Welcome {user.name}!</h1>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task} - Assigned To: {task.assignedTo.name} - Status: {task.status}
            {task.status === 'Not Started' && (
              <button onClick={() => handleStartTask(task.id)}>Start</button>
            )}
            {task.status === 'In Progress' && (
              <button onClick={() => handleCompleteTask(task.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeveloperScreen;
