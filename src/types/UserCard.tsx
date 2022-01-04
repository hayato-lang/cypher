import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  username: string;
  imageUrl: string;
  name: string;
}

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, username, name } = props;
  return (
        <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius= "10px"
          shadow="md"
          p={4}
        >
          <Stack textAlign="center">
            <Image 
              src={imageUrl}
              borderRadius="full"
              boxSize="160px"
              alt={username}
              m="auto"
            />
            <Text
              fontSize="lg" 
              fontWeight="bold" 
              fontFamily="Kaushan Script" 
              color="blue.400"
            >
              {username}
            </Text>
            <Text fontSize="sm" fontWeight="gray.100">
              {name}
            </Text>
          </Stack>
        </Box>
  );
});