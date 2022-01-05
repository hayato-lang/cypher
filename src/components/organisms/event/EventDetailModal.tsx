import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const EventDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return(
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay>
      <ModalContent pb={6}>
        <ModalHeader>イベント詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>タイトル</FormLabel>
              <Input value="アドレナリン2022" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>内容</FormLabel>
              <Input value="バチバチの熱い戦いが今ここに!!" isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  </Modal>
  );
})