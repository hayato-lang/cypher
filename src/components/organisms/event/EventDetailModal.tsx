import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Event } from "../../../types/api/event";

type Props = {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventDetailModal: VFC<Props> = memo((props) => {
  const {  event ,isOpen, onClose } = props;
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
              <Input value={event?.title} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>内容</FormLabel>
              <Input value={event?.body} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  </Modal>
  );
})