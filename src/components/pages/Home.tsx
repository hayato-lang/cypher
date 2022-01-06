/* eslint-disable react-hooks/exhaustive-deps */

import { memo, useEffect } from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import { useAllEvents } from "../../hooks/useAllEvents";
import { Center, Spinner } from "@chakra-ui/react";
import { HomeEventCard } from "../organisms/event/HomeEventCard";

const setting: Settings = {
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  autoplay: true,
  speed: 700,
  pauseOnHover: true
};


export const Home: React.VFC = memo(() => {
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
});