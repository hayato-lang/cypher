/* eslint-disable react-hooks/exhaustive-deps */

import { memo, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import { SliderEvents } from "../organisms/event/SliderEvents";
import { useAllUsers } from "../../hooks/useAllUsers";
import { Center, Spinner } from "@chakra-ui/react";
import Slider, { Settings } from "react-slick";
import { HomeUserCard } from "../organisms/user/HomeUserCard";

const settings: Settings = { 
  dots: true,
  infinite: true,
  centerMode: true,
  speed: 500,
  cssEase: "ease-out",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    { breakpoint: 640,
    settings: {
      slidesToShow: 1,
    },
  },
  ],
};

export const Home: React.VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers, []);
  return (
    <>
    {loading ? (
      <Center>
        <Spinner/>
      </Center>
    ) : (
      <>
        <SliderEvents />
        <Slider {...settings}>
          {users.map((user) => (
            <Center>
              <HomeUserCard 
              key={user.id}
              username={user.username}
              imageUrl="https://source.unsplash.com/random"
              name={user.name}
              />
            </Center>
          ))}
        </Slider>
      </>
    )}
    </>
  );
});
