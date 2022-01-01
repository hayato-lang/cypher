import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { memo, VFC } from "react";


type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose} >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody bg="blue.300" p={0}>
            <Button w="100%">HOME</Button>
            <Button w="100%">ユーザー一覧</Button>
            <Button w="100%">イベント一覧</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});