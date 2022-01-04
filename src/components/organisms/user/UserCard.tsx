import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  username: string;
  imageUrl: string;
  name: string;
  onClick: () => void;
}

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, username, name, onClick } = props;
  return (
        <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius= "10px"
          shadow="md"
          p={4}
          onClick={onClick}
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