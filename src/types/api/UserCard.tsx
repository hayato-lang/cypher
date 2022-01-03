import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  storeTitle: string;
  imageUrl: string;
  access: string;
}

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, access, storeTitle } = props;
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
              alt={storeTitle}
              m="auto"
            />
            <Text
              fontSize="lg" 
              fontWeight="bold" 
              fontFamily="Kaushan Script" 
              color="blue.400"
            >
              {storeTitle}
            </Text>
            <Text fontSize="sm" fontWeight="gray.100">
              {access}
            </Text>
          </Stack>
        </Box>
  );
});