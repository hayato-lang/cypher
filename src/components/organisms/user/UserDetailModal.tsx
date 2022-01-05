import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { User } from "../../../types/api/user";

type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, onClose } = props;
  return(
    <Modal onClose={onClose} isOpen={isOpen} autoFocus={false}>
    <ModalOverlay
    >
      <ModalContent pb={6}>
        <ModalHeader>ライブハウス詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>店名</FormLabel>
                <Input value={user?.name} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>経営者</FormLabel>
                <Input value={user?.username} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>tel</FormLabel>
                <Input value={user?.phone} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>email</FormLabel>
                <Input value={user?.website} isReadOnly />
              </FormControl>
            </Stack>
        </ModalBody> 
      </ModalContent>
    </ModalOverlay>
  </Modal>
  );
})