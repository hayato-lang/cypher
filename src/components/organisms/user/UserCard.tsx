import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  id: number;
  username: string;
  imageUrl: string;
  name: string;
  onClick: (id: number) => void;
}

export const UserCard: VFC<Props> = memo((props) => {
  const { id, imageUrl, username, name, onClick } = props;
  return (
        <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius= "10px"
          _hover={{cursor: "pointer", opacity: 0.8}}
          shadow="md"
          p={4}
          onClick={() => onClick(id)}
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