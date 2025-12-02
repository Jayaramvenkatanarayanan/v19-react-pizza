import type{ Pizza } from '../../Domain/entities/Pizza';

export class PizzaAPIDataSource{
  static async fetchPizzaTypes():Promise<Pizza[]>{
    const getPizzaTypeResponse = await fetch('/api/pizzas');
    return await getPizzaTypeResponse.json()
  }
  static async fetchPizzaOfTheDay():Promise<Pizza>{
    const getPizzaOfTheDayResponse = await fetch('api/pizza-of-the-day');
    return await getPizzaOfTheDayResponse.json()
  }
}