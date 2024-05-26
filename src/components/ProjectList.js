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
  TableContainer,
  Button,
} from '@chakra-ui/react';

const ProjectList = ({ projects }) => {
  // Dummy data for demonstration
  const dummyProjects = [
    { projectName: 'ect-mindtree', owner: 'Uttam', cpu: '2 cores', memory: '4GB', date: '2024-05-26' },
    { projectName: 'ect-capgemini', owner: 'Shiv', cpu: '4 cores', memory: '8GB', date: '2024-05-25' },
    { projectName: 'ect-oracle', owner: 'Ravi', cpu: '1 core', memory: '2GB', date: '2024-05-24' },
    { projectName: 'ect-amazon', owner: 'Aman', cpu: '8 cores', memory: '16GB', date: '2024-05-20' },
    { projectName: 'ect-walmart', owner: 'Dubey', cpu: '16 cores', memory: '32GB', date: '2024-05-25' },
    { projectName: 'ect-adobe', owner: 'Ranjan', cpu: '32 cores', memory: '128GB', date: '2024-05-25' },
  ];

  // Function to handle the download action
  const handleDownloadConfig = (project) => {
    // Create a dummy configuration JSON object for the specific project
    const config = JSON.stringify(project, null, 2);

    // Create a blob with the JSON data
    const blob = new Blob([config], { type: 'application/json' });

    // Create a URL for the blob
    const url = window.URL.createObjectURL(blob);

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.projectName}-config.json`; // Customize the file name

    // Trigger a click event on the anchor to start the download
    document.body.appendChild(a);
    a.click();

    // Clean up
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

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
              <Th>Action</Th> {/* Add a new column for the action button */}
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
                <Td>
                  <Button colorScheme="teal" size="sm" onClick={() => handleDownloadConfig(project)}>
                    Download Config
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProjectList;