import { useEffect, useState } from "react";
import PizzaList from "../Presentation/Components/Pizza";
import type { Pizza, PizzaSizeType } from "../Domain/entities/Pizza";
import { PizzasUseCase } from "../Domain/usecases/Pizzas.usecase";
import { PizzaRepositoryImpl } from "../Data/repositories/PizzaRepositoryImpl";
import { Helper } from "../Core/utils/helper";
import Carts from "../Presentation/Components/Carts";
import { OrderUsecase } from "../Domain/usecases/Order.usecase";
import { OrderRepositoryImpl } from "../Data/repositories/OrderRepositoryImpl";
import useCartContext from "../Presentation/hooks/useCartContext";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute('/order')({
  component: Order,
})

function Order () {
  const [pizzaTypes, setPizzaTypes] = useState<Pizza[]>([]);
  const [pizzaType, setPizzaType] = useState<string>("pepperoni");
  const [pizzaSize, setPizzaSize] = useState<PizzaSizeType>("M");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { cart, setCart } = useCartContext();

  let selectedPizza: Pizza | undefined;
  let price: number = 0;

  if (!isLoading && pizzaTypes) {
    selectedPizza = pizzaTypes?.find((pizza) => pizzaType === pizza.id);
    price = selectedPizza?.sizes?.[pizzaSize] ?? 0;
  }

  useEffect(() => {
    async function fetchPizzaTypes() {
      const response = await new PizzasUseCase(new PizzaRepositoryImpl())
        .getPizzas()
        .then(setPizzaTypes);
      setIsLoading(false);
      return response;
    }
    fetchPizzaTypes();
  }, []);

  async function checkOut() {
    if (cart) {
      setIsLoading(true);
      const response = await new OrderUsecase(
        new OrderRepositoryImpl()
      ).placeOrder(cart);
      if (!response) {
        console.log("response not found");
      }
      setIsLoading(false);
      setCart([]);
    }
  }

  return (
    <div className="order-page">
      <div className="order">
        <h2>Create Order</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (selectedPizza) {
              setCart([
                ...cart,
                { pizza: selectedPizza, size: pizzaSize, price },
              ]);
            }
          }}
        >
          <div>
            <div>
              <label htmlFor="pizza-type">Pizza Type</label>
              <select
                onChange={(e) => setPizzaType(e.target.value)}
                name="pizza-type"
                value={pizzaType}
              >
                {pizzaTypes.map((pizza) => (
                  <option key={pizza.id} value={pizza.id}>
                    {pizza.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pizza-size">pizza-Size</label>
              <div>
                <span>
                  <input
                    checked={pizzaSize === "S"}
                    type="radio"
                    name="pizza-size"
                    value="S"
                    id="pizza-s"
                    onChange={(e) =>
                      setPizzaSize(e.target.value as PizzaSizeType)
                    }
                  />
                  <label htmlFor="pizza-s">Small</label>
                </span>
                <span>
                  <input
                    checked={pizzaSize === "M"}
                    type="radio"
                    name="pizza-size"
                    value="M"
                    id="pizza-m"
                    onChange={(e) =>
                      setPizzaSize(e.target.value as PizzaSizeType)
                    }
                  />
                  <label htmlFor="pizza-m">medium</label>
                </span>
                <span>
                  <input
                    checked={pizzaSize === "L"}
                    type="radio"
                    name="pizza-size"
                    value="L"
                    id="pizza-l"
                    onChange={(e) =>
                      setPizzaSize(e.target.value as PizzaSizeType)
                    }
                  />
                  <label htmlFor="pizza-l">Large</label>
                </span>
              </div>
            </div>
            <button type="submit">Add to Cart</button>
          </div>
          {isLoading ? (
            <h3>Loading....</h3>
          ) : (
            selectedPizza && (
              <div className="order-pizza">
                <PizzaList pizza={selectedPizza} />
                <p>{Helper.intl().format(price)}</p>
              </div>
            )
          )}
        </form>
      </div>
      {isLoading ? (
        <h2>LOADING …</h2>
      ) : (
        <Carts cart={cart} checkout={checkOut} />
      )}
    </div>
  );
};
