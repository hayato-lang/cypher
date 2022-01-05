import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  userId: string;
  title: string;
  imageUrl: string;
  onOpen: () => void;
}

export const EventCard: VFC<Props> = memo((props) => {
  const { userId, title, imageUrl, onOpen } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius= "10px"
      shadow="md"
      p={4}
      onClick={onOpen}
    >
      <Stack textAlign="center">
        <Image 
          src={imageUrl}
          borderRadius="full"
          boxSize="160px"
          alt={userId}
          m="auto"
        />
        <Text
          fontSize="lg" 
          fontWeight="bold" 
          fontFamily="Kaushan Script" 
          color="blue.400"
        >
          {title}
        </Text>
      </Stack>
    </Box>
  );
});