/* eslint-disable react-hooks/exhaustive-deps */

import { memo } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import { SliderEvents } from "../organisms/event/SliderEvents";



export const Home: React.VFC = memo(() => {
  return (
    <SliderEvents />
  );
});