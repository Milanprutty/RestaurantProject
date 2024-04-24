import { useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";
import yellowStar from "../../assets/yellowStar.svg";
import heart from "../../assets/heart.svg";

import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

interface Dish {
  name: string;
  description: string;
  price: string;
  rating: number;
  img: string;
}

interface Props {
  DishData: Dish[];
}

const SimpleSlider = ({ DishData }: Props) => {
  const sliderRef = useRef<Slider>(null);

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev?.();
    }
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext?.();
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },

      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div style={{ position: "relative" }}>
        <div className="carouselBtnContainer">
          <div onClick={previous} className="carouselBtn">
            <img src={arrowLeft} alt="arrowLeft" />
          </div>
          <div
            style={{ backgroundColor: "#39DB4A" }}
            onClick={next}
            className="carouselBtn"
          >
            <img src={arrowRight} alt="arrowRight" />
          </div>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {DishData.map((dish, i) => {
          return (
            <CarouselItem
              key={i}
              dish={dish}
              heart={heart}
              yellowStar={yellowStar}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
