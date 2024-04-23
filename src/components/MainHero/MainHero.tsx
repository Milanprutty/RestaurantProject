import "./MainHero.css";
import Play from "../../assets/play.svg";

import lady from "../../assets/image.png";
import dishArr from "./exampleDishes.ts";
import Dish from "./Dish.tsx";

const MainHero = () => {
  return (
    <div className="mainHeroContainer">
      <div className="leftSide">
        <div className="headerDiv">
          <div>Dive into Delights </div>
          <div>
            Of Delectable <span>Food</span>
          </div>
          <p>
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
        </div>

        <div className="heroBtnContainer">
          <button>Order Now</button>
          <div>
            Watch Video
            <button>
              <img src={Play} />
            </button>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="ladyContainer">
          <div className="box sb1">Hot spicy Food 🌶</div>
          <img src={lady} loading="eager" />
          <div className="ladyBackground"></div>
          <div className="dishContainer ">
            {dishArr.map((dish, i) => {
              return (
                <Dish
                  key={i}
                  imageUrl={dish.img}
                  name={dish.name}
                  price={dish.price}
                  stars={dish.yellowStars}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
