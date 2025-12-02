import type { Cart } from "../../Domain/entities/Cart";
import type { Order } from "../../Domain/entities/Order";
import type { OrderRepository } from "../../Domain/repositories/OrderRepository";
import { OrderAPIDataSource } from "../datasources/OrderAPIDataSource";

export class OrderRepositoryImpl implements OrderRepository{
    async order(cart: Cart[]): Promise<Order> {
        return await OrderAPIDataSource.placeCartOrder(cart)
    }

}