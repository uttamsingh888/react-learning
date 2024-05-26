import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const GitHubCallback = ({ setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGitHubUser = async (code) => {
      try {
        const response = await axios.post('https://backendapis/github/callback', { code });
        const { username } = response.data;
        setUser({ username });
        navigate('/dashboard');
      } catch (error) {
        console.error('GitHub login failed', error);
      }
    };

    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      fetchGitHubUser(code);
    }
  }, [navigate, setUser]);

  return <div>Loading...</div>;
};

export default GitHubCallback;