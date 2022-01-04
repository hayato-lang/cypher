import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
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
                <Input value="larus" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>経営者</FormLabel>
                <Input value="Dj松永" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>tel</FormLabel>
                <Input value="090-1234-5678" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>email</FormLabel>
                <Input value="ebizou@gmail.com" isReadOnly />
              </FormControl>
            </Stack>
        </ModalBody> 
      </ModalContent>
    </ModalOverlay>
  </Modal>
  );
})