import { Box, Container, Flex, Heading, Link, Stack, Text, VStack, chakra } from "@chakra-ui/react";
import { FaPenNib, FaRegClock, FaRegCommentDots } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="xl" py={10}>
      {/* Header with title */}
      <Box as="header" textAlign="center" mb={10}>
        <Heading as="h1" fontFamily="serif" fontSize="4xl" color="purple.600">
          My Blog
        </Heading>
      </Box>

      {/* Navigation */}
      <Flex as="nav" justifyContent="center" mb={10}>
        <Link px={3} py={2} href="#" color="purple.500" fontFamily="serif" _hover={{ color: "purple.700" }}>
          Home
        </Link>
        <Link px={3} py={2} href="#" color="purple.500" fontFamily="serif" _hover={{ color: "purple.700" }}>
          About
        </Link>
        <Link px={3} py={2} href="#" color="purple.500" fontFamily="serif" _hover={{ color: "purple.700" }}>
          Contact
        </Link>
      </Flex>

      {/* Post Preview */}
      <VStack align="stretch" spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="purple.50">
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <chakra.h2 fontSize="2xl" fontFamily="serif" color="purple.700">
              The Beauty of Nature
            </chakra.h2>
            <FaPenNib color="#805AD5" />
          </Flex>
          <Text fontFamily="serif" mb={4}>
            Nature has always been an inspiration for the aesthetic creation of works of art, poems, and much more. Join me as we explore the depths of nature's beauty in this article.
          </Text>
          <Flex alignItems="center">
            <FaRegClock color="#805AD5" />
            <Text ml={2} fontFamily="serif" color="gray.600">
              June 20, 2023
            </Text>
            <Box as="span" mx={4} color="gray.300">
              |
            </Box>
            <FaRegCommentDots color="#805AD5" />
            <Text ml={2} fontFamily="serif" color="gray.600">
              12 Comments
            </Text>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
