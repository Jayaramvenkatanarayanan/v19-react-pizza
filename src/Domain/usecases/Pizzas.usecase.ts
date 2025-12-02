import type { PizzaRepository } from "../repositories/PizzaRepository";

export class PizzasUseCase{
   constructor(private repository: PizzaRepository) {}
    async getPizzas(){
        return this.repository.getPizzaType()
    }
    async getPizzaOfTheDay(){
        return this.repository.getPizzaOfTheDay()
    }
}
