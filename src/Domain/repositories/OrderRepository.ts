import type { Cart } from "../entities/Cart";
import type { Order } from "../entities/Order";

export interface OrderRepository{
order(cart:Cart[]):Promise<Order>
}