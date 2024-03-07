// AdminScreen.js
import React, { useState } from 'react';

const AdminScreen = ({ user }) => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ id: '', name: '', tasks: [] });

  const handleCreateProject = () => {
    setProjects([...projects, { ...newProject, id: `project${projects.length + 1}` }]);
    setNewProject({ id: '', name: '', tasks: [] });
  };

  return (
    <div>
      <h1>Welcome {user.name}!</h1>
      <h2>Create Project</h2>
      <input
        type="text"
        placeholder="Project Name"
        value={newProject.name}
        onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
      />
      <button onClick={handleCreateProject}>Create Project</button>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminScreen;
