import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Header: VFC = memo(() => {
  return (
    <Flex 
      as="nav"
      bg="gray.300"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 2, md: 4 }}
      opacity={0.8}
    >
      <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
        <Heading 
          as="p" 
          fontSize='2xl'
          fontFamily="Kaushan Script"
          color="blue.300"
          >
          Cypher
        </Heading >
      </Flex>
      <Flex
        align="center"
        fontSize='2xl'
        flexGrow={2}
        display={{ base: "none", md: "flex" }}
      >
        <Box pr={4}>
          <Link fontFamily="Kaushan Script">Users</Link>
        </Box>
        <Link fontFamily="Kaushan Script">Events</Link>
      </Flex>
    </Flex>
  );
});