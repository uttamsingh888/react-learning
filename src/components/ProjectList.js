import React from 'react';
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react';

const ProjectList = ({ projects }) => {
  // Dummy data for demonstration
  const dummyProjects = [
    { projectName: 'Project Mindtree', owner: 'Uttam', cpu: '2 cores', memory: '4GB', date: '2023-01-01' },
    { projectName: 'Project Capgemini', owner: 'Shiv', cpu: '4 cores', memory: '8GB', date: '2023-02-15' },
    { projectName: 'Project Oracle', owner: 'Ravi', cpu: '1 core', memory: '2GB', date: '2023-03-10' },
    { projectName: 'Project Amazon', owner: 'Aman', cpu: '8 cores', memory: '16GB', date: '2023-04-20' },
    { projectName: 'Project Walmart', owner: 'Dubey', cpu: '16 cores', memory: '32GB', date: '2023-05-05' },
  ];

  return (
    <Box p={4}>
      <Heading mb={4}>Project List</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Project Name</Th>
              <Th>Owner</Th>
              <Th>CPU</Th>
              <Th>Memory</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dummyProjects.map((project, index) => (
              <Tr key={index}>
                <Td>{project.projectName}</Td>
                <Td>{project.owner}</Td>
                <Td>{project.cpu}</Td>
                <Td>{project.memory}</Td>
                <Td>{project.date}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProjectList;