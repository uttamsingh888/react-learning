import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Input, FormControl, FormLabel, Heading, VStack } from '@chakra-ui/react';
import axios from 'axios';

const Auth = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Mock authentication
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username] && users[username] === password) {
      setUser({ username });
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignup = async () => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) {
      alert('User already exists');
    } else {
      users[username] = password;
      localStorage.setItem('users', JSON.stringify(users));
      alert('User registered successfully');
      setIsSignup(false);
    }
  };

  const handleSubmit = async () => {
    if (isSignup) {
      handleSignup();
    } else {
      handleLogin();
    }
  };

  return (
    <Box w="400px" p={4} m="20px auto" borderWidth="1px" borderRadius="lg">
      <Heading mb={4}>{isSignup ? 'Sign Up' : 'Login'}</Heading>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleSubmit}>{isSignup ? 'Sign Up' : 'Login'}</Button>
        <Button variant="link" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? 'Have an account? Login' : 'New user? Sign Up'}
        </Button>
      </VStack>
    </Box>
  );
};

export default Auth;