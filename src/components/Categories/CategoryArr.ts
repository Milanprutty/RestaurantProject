interface categoryInterface {
  name: string;
  count: string;
  img: string;
}

import dish1 from "../../assets/imgs/burger.png";
import dish2 from "../../assets/imgs/sandwich.png";
import dish3 from "../../assets/imgs/icecream.png";
import dish4 from "../../assets/imgs/orangejuice.png";

export const categoryData: categoryInterface[] = [
  {
    name: "Main Dish",
    count: "(86 dishes)",
    img: dish1,
  },
  {
    name: "Breakfast",
    count: "(12 breakfast)",
    img: dish2,
  },
  {
    name: "Dessert",
    count: "(48 dessert)",
    img: dish3,
  },
  {
    name: "Browse All",
    count: "(225 Items)",
    img: dish4,
  },
];
