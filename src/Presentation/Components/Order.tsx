import { useEffect, useState } from "react";
import PizzaList from "./Pizza";
import type { Pizza } from "../../Domain/entities/Pizza";
import { PizzasUseCase } from "../../Domain/usecases/Pizzas.usecase";
import { PizzaRepositoryImpl } from "../../Data/repositories/PizzaRepositoryImpl";

type PizzaSizeType = "S" | "M" | "L";
const intl = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});
const Order = () => {
  const [pizzaTypes, setPizzaTypes] = useState<Pizza[]>([]);
  const [pizzaType, setPizzaType] = useState<string>("pepperoni");
  const [pizzaSize, setPizzaSize] = useState<PizzaSizeType>("M");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  let selectedPizza: Pizza | undefined;
  let price: string = "";

  if (!isLoading && pizzaTypes) {
    selectedPizza = pizzaTypes?.find((pizza) => pizzaType === pizza.id);
    price = intl.format(selectedPizza?.sizes?.[pizzaSize] ?? 0);
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

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
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
            <label htmlFor="pizza-size">pizza-size</label>
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
          {isLoading ? (
            <h3>Loading....</h3>
          ) : (
            selectedPizza && (
              <div className="order-pizza">
                <PizzaList pizza={selectedPizza} />
                <p>{price}</p>
              </div>
            )
          )}
        </div>
      </form>
    </div>
  );
};

export default Order;
