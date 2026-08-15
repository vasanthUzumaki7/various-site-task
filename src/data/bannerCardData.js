import BeanCup from "@/assets/images/bean-cup.png";
import Pot from "@/assets/images/pot.png";
import TeaCup from "@/assets/images/tea-cup.png";
import Plate from "@/assets/images/plate.png";
import bowl from "@/assets/images/round-pot.png"

import {
  FaShieldHalved,
  FaHandHoldingHeart,
  FaArrowRotateLeft,
  FaTruckFast,
  FaCreditCard,
} from "react-icons/fa6";

export const bannerCardData = [
  
   {
        id: 1,
        image: bowl,
        alt: "bowl",
        name: "bowl",
        price: "$120.00",
      },
  { id: 2, image: BeanCup,
    alt: "Bean Cup",
    name: "Bean Cup",
    price: "$120.00", },
  { id: 3, image: TeaCup, alt: "Tea Cup", name: "Tea Cup", price: "$95.00" },
  { id: 4, image: Plate, alt: "Plate", name: "Plate", price: "$210.00" },
  {
    id: 5,
    image: Pot, alt: "Pot", name: "Pot", price: "$180.00"
    
  },
 
];

export const features = [
  { label: "Quality Assured", icon: FaShieldHalved },
  { label: "Handpicked Items", icon: FaHandHoldingHeart },
  { label: "Easy Returns", icon: FaArrowRotateLeft },
  { label: "Fast Shipping", icon: FaTruckFast },
  { label: "Secure Checkout", icon: FaCreditCard },
];