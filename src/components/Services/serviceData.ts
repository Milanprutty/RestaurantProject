interface serviceInterface {
  name: string;
  description: string;
  img: string;
}

import Catering from "../../assets/catering.svg";
import Delivery from "../../assets/delivery.svg";
import Ordering from "../../assets/onlineOrdering.svg";
import giftCard from "../../assets/giftCard.svg";

export const ServiceData: serviceInterface[] = [
  {
    name: "catering",
    description: "Delight your guests with our flavors and  presentation",
    img: Catering,
  },
  {
    name: "Fast delivery",
    description: "We deliver your order promptly to your door",
    img: Delivery,
  },
  {
    name: "Online Ordering",
    description: "Explore menu & order with ease using our Online Ordering ",
    img: Ordering,
  },
  {
    name: "Gift Cards",
    description: "Give the gift of exceptional dining with Foodi Gift Cards",
    img: giftCard,
  },
];
