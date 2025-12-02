import React from "react";
import type { Cart } from "../../Domain/entities/Cart";
import { Helper } from "../../Core/utils/helper";

type CartProps = {
  cart: Cart[];
};

const Carts: React.FC<CartProps> = ({ cart }) => {
  let total: number = 0;
  if (cart) {
    total = cart.reduce((prev, currentVal) => prev + currentVal.price, 0);
  }
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart?.map((item, index) => (
          <li key={index}>
            <span className="size">{item.size}</span> -
            <span className="type">{item.pizza.name}</span> -
            <span className="price">{Helper.intl().format(item.price)}</span>
          </li>
        ))}
      </ul>
      <p>Total: {Helper.intl().format(total)}</p>
      <button>Checkout</button>
    </div>
  );
};

export default Carts;
