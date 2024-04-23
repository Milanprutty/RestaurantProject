interface dishInterface {
  name: string;
  yellowStars: number;
  price: string;
  img: string;
}

import heroimg1 from "../../assets/imgs/heroimg1.png";
import heroimg2 from "../../assets/imgs/heroimg2.png";

const dishes: dishInterface[] = [
  {
    name: "Spicy noodles",
    yellowStars: 3,
    price: "18.00",
    img: heroimg1,
  },
  {
    name: "Vegetarian salad",
    yellowStars: 4,
    price: "23.00",
    img: heroimg2,
  },
];

export default dishes;
