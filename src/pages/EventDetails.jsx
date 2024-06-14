import { useParams } from "react-router-dom";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const EventDetails = () => {
  const { eventName } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const selectedEvent = events.find((event) => event.name === eventName);
    setEvent(selectedEvent);
  }, [eventName]);

  if (!event) {
    return (
      <Container centerContent maxW="container.md" py={8}>
        <Heading as="h1" size="xl">Event Not Found</Heading>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">{event.name}</Heading>
        <Text fontSize="lg"><strong>Date:</strong> {event.date}</Text>
        <Text fontSize="lg"><strong>Location:</strong> {event.location}</Text>
        <Text fontSize="lg"><strong>Description:</strong> {event.description}</Text>
      </VStack>
    </Container>
  );
};

export default EventDetails;