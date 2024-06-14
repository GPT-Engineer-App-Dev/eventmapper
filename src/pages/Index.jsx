import { Container, Text, VStack, Heading, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaCalendarPlus, FaListAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" mb={4}>Events Management</Heading>
        <Text fontSize="lg" textAlign="center">Welcome to the Events Management App. Organize and manage your events efficiently.</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaCalendarPlus />} colorScheme="teal" size="lg">
            Create Event
          </Button>
          <Button leftIcon={<FaListAlt />} colorScheme="teal" size="lg">
            View Events
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;