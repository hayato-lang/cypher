/* eslint-disable react-hooks/exhaustive-deps */

import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { useAllEvents } from "../../hooks/useAllEvents";
import { EventCard } from "../../types/EventCard";

export const ShowEvent: VFC = memo(() => {
  const { getEvents, loading, events } = useAllEvents();

  useEffect(() => getEvents(), []);
  return (
    <>
      {loading ? (
        <Center>
          <Spinner/>
        </Center>
      ) : (
        <Wrap p={{base: 3, md: 10}} mx="auto">
          {events.map((event) => (
            <WrapItem key={event.id}>
              <EventCard
                imageUrl="https://source.unsplash.com/random"
                userId={event.userId}
                title={event.title}
                  />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});

