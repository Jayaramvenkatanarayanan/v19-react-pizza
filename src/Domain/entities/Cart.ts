import type { Pizza } from "./Pizza";

export interface Cart {
  pizza: Pizza;
  size: string;
  price: number;
}
