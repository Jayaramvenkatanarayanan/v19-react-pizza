import type { Pizza } from '../entities/Pizza';

export interface PizzaRepository{
 getPizzaType():Promise<Pizza[]>
 getPizzaOfTheDay():Promise<Pizza>
}