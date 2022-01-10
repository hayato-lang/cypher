/* eslint-disable react-hooks/exhaustive-deps */

import { memo } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import { SliderEvents } from "../organisms/event/SliderEvents";
import { SliderUsers } from "../organisms/user/SliderUsers";


export const Home: React.VFC = memo(() => {
  return (
  <>
    <SliderEvents />
    <SliderUsers />
  </>);
});
