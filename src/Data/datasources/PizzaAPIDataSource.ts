import type{ Pizza } from '../../Domain/entities/Pizza';

export class PizzaAPIDataSource{
  static async fetchPizzaTypes():Promise<Pizza[]>{
    const getPizzaTypeResponse = await fetch('/api/pizzas');
    return await getPizzaTypeResponse.json()
  }
}