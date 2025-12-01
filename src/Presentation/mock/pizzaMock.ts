import type { Pizza } from "../../Domain/entities/Pizza";
import Pepperoni from "../../../public/pizzas/bbq_ckn.webp";
import Hawaiian from "../assets/pizzas/hawaiian.webp";
import Bigmeat from "../assets/pizzas/big_meat.webp";

export const pizzaMock: Pizza[] = [
  {
    name: "The Pepperoni Pizza",
    description: "Mozzarella Cheese, Pepperoni",
    image: Pepperoni,
  },
  {
    name: "The Hawaiian Pizza",
    description: "Sliced Ham, Pineapple, Mozzarella Cheese",
    image: Hawaiian,
  },
  {
    name: "The Big Meat Pizza",
    description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
    image: Bigmeat,
  },
];
