import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  id: number;
  userId: string;
  title: string;
  imageUrl: string;
  onClick: (id: number) => void;

}

export const EventCard: VFC<Props> = memo((props) => {
  const { id,userId, title, imageUrl, onClick } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius= "10px"
      shadow="md"
      p={4}
      onClick={() => onClick(id)}
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