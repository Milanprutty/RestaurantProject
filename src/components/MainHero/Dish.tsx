import "./Dish.css";
import yellowStar from "../../assets/yellowStar.svg";
import greyStar from "../../assets/greyStar.svg";

interface Props {
  imageUrl: string;
  name: string;
  price: string;
  stars: number;
}

const Dish = ({ imageUrl, name, price, stars }: Props) => {
  const getUuid = () => {
    return crypto.randomUUID();
  };

  const getStars = (stars: number) => {
    const remainder = 5 % stars;

    const items = [];
    const highlightedStars = 5 - remainder;
    for (let i = 0; i < highlightedStars; i++) {
      items.push(
        <div key={i}>
          <img className="star" src={yellowStar} />
        </div>
      );
    }
    for (let i = 0; i < remainder; i++) {
      items.push(
        <div key={getUuid()}>
          <img className="star" src={greyStar} />
        </div>
      );
    }
    return items;
  };

  return (
    <div className="dishes">
      <img src={imageUrl} />
      <div className="dishItems">
        <div>{name}</div>
        <div className="starContainer">{getStars(stars)}</div>
        <div className="prices">
          <span>$</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Dish;
