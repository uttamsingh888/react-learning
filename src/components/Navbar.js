import React from 'react';
import { Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <Flex p={4} bg="teal.500" color="white">
      <Heading size="md">Kubernetes Namespace Management</Heading>
      <Spacer />
      {user && (
        <Button colorScheme="teal" variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </Flex>
  );
};

export default Navbar;