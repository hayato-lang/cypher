/* eslint-disable react-hooks/exhaustive-deps */

import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { useAllEvents } from "../../hooks/useAllEvents";
import { useSelectEvent } from "../../hooks/useSelectEvent";
import { EventCard } from "../organisms/event/EventCard";
import { EventDetailModal } from "../organisms/event/EventDetailModal";

export const ShowEvent: VFC = memo(() => {
  const { getEvents, loading, events } = useAllEvents();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectEvent, selectEvent } = useSelectEvent()


  useEffect(() => getEvents(), []);

  const onClickOpen = useCallback((id: number) => {
    onSelectEvent({id, events, onOpen})
  }, [events, onSelectEvent, onOpen]);
  return (
    <>
      {loading ? (
        <Center>
          <Spinner/>
        </Center>
      ) : (
        <Wrap p={{base: 4, md: 10}} mx="auto">
          {events.map((event) => (
            <WrapItem key={event.id}>
              <EventCard
                id={event.id}
                imageUrl="https://source.unsplash.com/random"
                userId={event.userId}
                title={event.title}
                onClick={onClickOpen}
                  />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <EventDetailModal event={selectEvent} isOpen={isOpen} onClose={onClose} />
    </>
  );
});

