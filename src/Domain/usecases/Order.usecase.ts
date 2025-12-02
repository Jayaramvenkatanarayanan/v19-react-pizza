import type { Cart } from "../entities/Cart";
import type { OrderRepository } from "../repositories/OrderRepository";

export class OrderUsecase {
    constructor(private repository:OrderRepository){}
    async placeOrder(cart:Cart[]){
      return this.repository.order(cart)
    }
}