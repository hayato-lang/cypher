/* eslint-disable react-hooks/exhaustive-deps */

import { memo } from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const setting: Settings = {
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  autoplay: true,
  speed: 500,
};


export const Home: React.VFC = memo(() => {

  return (
    <div>
      <h2>Pick Up</h2>
      <Slider {...setting}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
});