import type { Cart } from "../entities/Cart";
import type { FocusOrder, Order, PastOrder } from "../entities/Order";

export interface OrderRepository{
order(cart:Cart[]):Promise<Order>
pastOrders(pageNumber:number):Promise<PastOrder[]>
pastOrderDetails(orderNumber:number):Promise<FocusOrder>
}