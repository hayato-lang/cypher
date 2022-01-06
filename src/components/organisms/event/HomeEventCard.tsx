import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  userId: string;
  title: string;
  imageUrl: string;
}

export const HomeEventCard: VFC<Props> = memo((props) => {
  const { userId, title, imageUrl} = props
  return (
    <Box
    w="90vw"
    h="460px"
    bg="white"
    borderRadius= "10px"
    shadow="md"
    p={4}
    mt={9}
  >
    <Stack textAlign="center">
      <Image 
        src={imageUrl}
        borderRadius="full"
        boxSize="360px"
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
})