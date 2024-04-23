interface DishDatas {
  name: string;
  description: string;
  price: string;
  rating: number;
  img: string;
}

import salad1 from "../../assets/imgs/salad1.png";
import salad2 from "../../assets/imgs/salad2.png";
import salad3 from "../../assets/imgs/salad3.png";

export const DishData: DishDatas[] = [
  {
    name: "Fattoush salad",
    description: "Description of the item",
    price: "24.00",
    rating: 4.9,
    img: salad1,
  },
  {
    name: "Vegetable salad",
    description: "Description of the item",
    price: "26.00",
    rating: 4.6,
    img: salad2,
  },
  {
    name: "Egg vegi salad",
    description: "Description of the item",
    price: "23.00",
    rating: 4.5,
    img: salad3,
  },
  {
    name: "Egg vegddi salad",
    description: "Description of the item",
    price: "23.00",
    rating: 4.5,
    img: salad1,
  },
  {
    name: "Egg vegsai salad",
    description: "Description of the item",
    price: "23.00",
    rating: 4.5,
    img: salad1,
  },
  {
    name: "Egg vegggi salad",
    description: "Description of the item",
    price: "23.00",
    rating: 4.5,
    img: salad1,
  },
];
