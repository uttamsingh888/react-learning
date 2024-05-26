import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import CreateProject from './components/CreateProject';
import ProjectList from './components/ProjectList';
import Navbar from './components/Navbar';
import { useState } from 'react';

const AppRoutes = () => {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Auth setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-project" element={<CreateProject addProject={addProject} />} />
        <Route path="/project-list" element={<ProjectList projects={projects} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;