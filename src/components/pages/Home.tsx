/* eslint-disable react-hooks/exhaustive-deps */

import { memo, useEffect, VFC } from "react";
import { useAllEvents } from "../../hooks/useAllEvents";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";

export const Home: VFC = memo(() => {
  const setting: Settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 500,
    cssEase: "ease-out"
  }
  const { getEvents, loading, events } = useAllEvents();


  useEffect(() => getEvents(), []);

  return (
    <>
    
    </>
  );
});