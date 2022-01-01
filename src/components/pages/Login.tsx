import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md">
          <Heading 
            as="h1" 
            fontFamily="Kaushan Script" 
            color="blue.300"
            size="lg"
            textAlign="center"
            >
              Cypher
            </Heading>
          <Divider my={4} />
          <Stack spacing={6} py={4} px={10}>
            <Input placeholder="ユーザーID" />
            <PrimaryButton>ログイン</PrimaryButton>
          </Stack>
      </Box>
    </Flex>
  );
});