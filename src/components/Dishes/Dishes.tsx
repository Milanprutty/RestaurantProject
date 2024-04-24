import "./Dishes.css";

import { DishData } from "./DishData";

import SimpleSlider from "./SimpleSlider";

const Dishes = () => {
  return (
    <div className="dishListContainer">
      <div>
        <div className="specialDishContainer">
          <div className="specialDishes">Special Dishes</div>
          <div className="dishAndBtns">
            <div className="standoutDishes">standout dishes from our menu</div>
          </div>
        </div>
      </div>
      <div className="carousel">
        <SimpleSlider DishData={DishData} />
      </div>
    </div>
  );
};

export default Dishes;
