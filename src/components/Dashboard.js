import React from 'react';
import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Heading mb={4}>Dashboard</Heading>
      <VStack spacing={4}>
        <Button colorScheme="teal" onClick={() => navigate('/create-project')}>Create Project</Button>
        <Button colorScheme="teal" onClick={() => navigate('/project-list')}>View All Projects</Button>
      </VStack>
    </Box>
  );
};

export default Dashboard;