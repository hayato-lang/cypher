import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const history = useHistory();
  const {isOpen, onOpen, onClose} = useDisclosure();

  const onClickHome = useCallback(() => history.push("/home"), [history]);
  const onClickShowUser = useCallback(() => history.push("/home/show_user"), [history]);
  const onClickShowEvent = useCallback(() => history.push("/home/show_event"), [history]);
  return (
  <>
    <Flex 
      as="nav"
      bg="gray.300"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 2, md: 4 }}
      opacity={0.6}
    >
      <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
        <Heading 
          as="p" 
          fontSize='2xl'
          fontFamily="Kaushan Script"
          color="blue.300"
          onClick={onClickHome}
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
          <Link fontFamily="Kaushan Script" color="yellow.200" onClick={onClickShowUser}>Users</Link>
        </Box>
        <Link fontFamily="Kaushan Script" color="yellow.200" onClick={onClickShowEvent}>Events</Link>
      </Flex>
      <MenuIconButton onOpen={onOpen}/>
    </Flex>
    <MenuDrawer isOpen={isOpen} onClose={onClose} />
  </>
  );
});