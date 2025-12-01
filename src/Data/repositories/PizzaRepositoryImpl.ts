import type { Pizza } from "../../Domain/entities/Pizza";
import type { PizzaRepository } from "../../Domain/repositories/PizzaRepository";
import { PizzaAPIDataSource } from "../datasources/PizzaAPIDataSource";

export class PizzaRepositoryImpl implements PizzaRepository{
    async getPizzaType(): Promise<Pizza[]> {
        return await PizzaAPIDataSource.fetchPizzaTypes()
    }
}