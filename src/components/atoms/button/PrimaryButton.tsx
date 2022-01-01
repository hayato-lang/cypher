import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children } = props
  return (
    <Button 
      bg="blue.300" 
      color="white" 
      _hover={{ opacity: 0.8 }}
    >
      {children}
    </Button>
  );
});