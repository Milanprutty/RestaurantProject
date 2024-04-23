interface Dish {
  name: string;
  description: string;
  price: string;
  rating: number;
  img: string;
}

interface Props {
  dish: Dish;
  heart: string;
  yellowStar: string;
}

const CarouselItem = ({ dish, heart, yellowStar }: Props) => {
  return (
    <div key={dish.name} className="dishCard">
      <div className="dishHeart">
        <img src={heart} alt="heart" />
      </div>
      <div className="dishImg">
        <img src={dish.img} />
      </div>
      <div className="dishInfo">
        <div>{dish.name}</div>
        <div>{dish.description}</div>
        <div className="dishPrice">
          <div>
            <span>$</span>
            {dish.price}
          </div>
          <div className="ratingContainer">
            <img src={yellowStar} alt="yellowStar" />
            {dish.rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
