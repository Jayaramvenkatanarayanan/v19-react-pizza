import { useEffect, useState } from "react";
import type { Pizza } from "../../Domain/entities/Pizza";
import { PizzasUseCase } from "../../Domain/usecases/Pizzas.usecase";
import { PizzaRepositoryImpl } from "../../Data/repositories/PizzaRepositoryImpl";

const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState<Pizza | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      return new PizzasUseCase(new PizzaRepositoryImpl())
        .getPizzaOfTheDay()
        .then(setPizzaOfTheDay);
    }
    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};

export default usePizzaOfTheDay;
