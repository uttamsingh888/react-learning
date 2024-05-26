import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, Flex } from '@chakra-ui/react';

const CreateProject = ({ addProject }) => {
  const [projectName, setProjectName] = useState('');
  const [owner, setOwner] = useState('');
  const [cpu, setCpu] = useState('');
  const [memory, setMemory] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format

    // Create project object with form values and current date
    const project = {
      projectName,
      owner,
      cpu,
      memory,
      date: currentDate,
    };

    // Call addProject function to submit project
    addProject(project);

    // Clear form fields after submission
    setProjectName('');
    setOwner('');
    setCpu('');
    setMemory('');

    // Display success message
    setSuccessMessage(`${projectName} created!`);
  };

  return (
    <Flex justify="center">
      <Box p={4} width="50%">
        <Heading mb={4} textAlign="center">Create Project</Heading>
        {successMessage && <Box mb={4} color="green.500" textAlign="center">{successMessage}</Box>}
        <form onSubmit={handleSubmit}>
          <Flex direction="column" alignItems="center">
            <FormControl id="projectName" mb={4} width="100%">
              <FormLabel>Project Name</FormLabel>
              <Input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="owner" mb={4} width="100%">
              <FormLabel>Owner</FormLabel>
              <Input
                type="text"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="cpu" mb={4} width="100%">
              <FormLabel>CPU</FormLabel>
              <Input
                type="text"
                value={cpu}
                onChange={(e) => setCpu(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="memory" mb={4} width="100%">
              <FormLabel>Memory</FormLabel>
              <Input
                type="text"
                value={memory}
                onChange={(e) => setMemory(e.target.value)}
                required
              />
            </FormControl>
            <Button type="submit" colorScheme="teal">Submit</Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default CreateProject;