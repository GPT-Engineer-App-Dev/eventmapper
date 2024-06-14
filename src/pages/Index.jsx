import { Container, Text, VStack, Heading, Box, Button, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarPlus, FaListAlt } from "react-icons/fa";

const Index = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" mb={4}>Events Management</Heading>
        <Text fontSize="lg" textAlign="center">Welcome to the Events Management App. Organize and manage your events efficiently.</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaCalendarPlus />} colorScheme="teal" size="lg" onClick={() => navigate("/create-event")}>
            Create Event
          </Button>
        </HStack>
        <VStack spacing={4} mt={8} width="100%">
          {events.map((event, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%" onClick={() => navigate(`/event/${event.name}`)} cursor="pointer">
              <Heading as="h3" size="md">{event.name}</Heading>
              <Text><strong>Date:</strong> {event.date}</Text>
              <Text><strong>Location:</strong> {event.location}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;