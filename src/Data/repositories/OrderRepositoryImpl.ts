import type { Cart } from "../../Domain/entities/Cart";
import type { Order, PastOrder } from "../../Domain/entities/Order";
import type { OrderRepository } from "../../Domain/repositories/OrderRepository";
import { OrderAPIDataSource } from "../datasources/OrderAPIDataSource";

export class OrderRepositoryImpl implements OrderRepository{
    async pastOrders(pageNumber: number): Promise<PastOrder[]> {
        return await OrderAPIDataSource.pastOrders(pageNumber)
    }
    async order(cart: Cart[]): Promise<Order> {
        return await OrderAPIDataSource.placeCartOrder(cart)
    }

}