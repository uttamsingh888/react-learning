// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { GitHubOAuthProvider } from '@react-oauth/github';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <GitHubOAuthProvider clientId="Ov23lixb48A2N8HG4bey">
      <Router>
        <nav>
          <div className="nav-links">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
      </GitHubOAuthProvider>
    </div>
  );
}

export default App;