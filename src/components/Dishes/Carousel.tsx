import yellowStar from "../../assets/yellowStar.svg";
import heart from "../../assets/heart.svg";
import CarouselItem from "./CarouselItem";

interface Dish {
  name: string;
  description: string;
  price: string;
  rating: number;
  img: string;
}

interface Props {
  activeIndex: number;
  DishData: Dish[];
}

const Carousel = ({ activeIndex, DishData }: Props) => {
  return (
    <div
      className="dishData"
      style={{ transform: `translate(-${activeIndex * 40}%) ` }}
    >
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
    </div>
  );
};

export default Carousel;
