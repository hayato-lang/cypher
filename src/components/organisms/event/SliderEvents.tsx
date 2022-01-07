/* eslint-disable react-hooks/exhaustive-deps */

import { Center, Spinner } from "@chakra-ui/react";
import { memo, useEffect } from "react";
import Slider, { Settings } from "react-slick";
import { useAllEvents } from "../../../hooks/useAllEvents";
import { HomeEventCard } from "./HomeEventCard";

const setting: Settings = {
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  autoplay: true,
  speed: 700,
  pauseOnHover: true
};

export const SliderEvents = memo(() => {
  const { getEvents, events, loading } = useAllEvents();

  useEffect(() => getEvents(), [])
  return (
    <>
    {loading ? (
      <Center>
        <Spinner/>
      </Center>
    ) : (
      <div>
        <Slider 
        {...setting}
        >
          {events.map((event) => (
            <Center>
              <HomeEventCard
                  key={event.userId} 
                  imageUrl="https://source.unsplash.com/random"
                  userId={event.userId}
                  title={event.title}
                />
            </Center>
          ))}
        </Slider>
      </div>
    )}
    </>
  );
})