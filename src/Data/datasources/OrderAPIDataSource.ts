import { Helper } from "../../Core/utils/helper";
import type { Cart } from "../../Domain/entities/Cart";
import type { FocusOrder, Order, PastOrder } from "../../Domain/entities/Order";

export class OrderAPIDataSource {
  static async placeCartOrder(cart: Cart[]): Promise<Order> {
    const orderApiResponse = await fetch(
      "/api/order",
      Helper.fetchPostMethod({cart:cart})
    );
    if (!orderApiResponse.ok) {
      throw new Error("Failed to place order");
    }
    const data: Order = await orderApiResponse.json();
    return data;
  }
  static async pastOrders(pageNumber:number):Promise<PastOrder[]>{
    const apiResponse = await fetch(`/api/past-orders?page${pageNumber}`);
    return await apiResponse.json()
  }
   static async pastOrderDetails(orderNumber:number):Promise<FocusOrder>{
    const apiResponse = await fetch(`/api/past-order/${orderNumber}`);
    return await apiResponse.json()
  }
}
