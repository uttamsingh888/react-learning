import React from 'react';
import { Box, Heading, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const ProjectList = ({ projects }) => {
  return (
    <Box p={4}>
      <Heading mb={4}>Project List</Heading>
      <List spacing={3}>
        {projects.map((project, index) => (
          <ListItem key={index}>
            <ListIcon as={CheckCircleIcon} color="teal.500" />
            {project.projectName}: {project.description}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProjectList;