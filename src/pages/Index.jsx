import { Container, Heading, Text, VStack, Box, Image, Link } from "@chakra-ui/react";
import { FaCloud, FaLock, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Payment Facilitation as a Service
          </Heading>
          <Text fontSize="xl">Tailored solutions for SaaS, ISVs, and ISOs operating in high-risk markets.</Text>
        </Box>

        <VStack spacing={6}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md" my={2}>
              <FaCloud /> Cloud-Based Integration
            </Heading>
            <Text fontSize="md">Seamless integration with existing platforms, ensuring minimal disruption and maximum efficiency.</Text>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md" my={2}>
              <FaLock /> Enhanced Security
            </Heading>
            <Text fontSize="md">Robust security measures tailored to high-risk industries, protecting your transactions and data integrity.</Text>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md" my={2}>
              <FaChartLine /> Scalable Solutions
            </Heading>
            <Text fontSize="md">Grow your business with scalable payment solutions that adapt to your changing needs.</Text>
          </Box>
        </VStack>

        <Box textAlign="center" mt={10}>
          <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoaWdoJTIwdGVjaCUyMGZpbmFuY2V8ZW58MHx8fHwxNzE1MDQ1OTM2fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        </Box>

        <Box textAlign="center" mt={10}>
          <Text fontSize="lg">Discover more about how our payment facilitation can transform your business.</Text>
          <Link href="#" color="teal.500" isExternal>
            Learn More
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
