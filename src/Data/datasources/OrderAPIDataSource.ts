import { Helper } from "../../Core/utils/helper";
import type { Cart } from "../../Domain/entities/Cart";
import type { Order } from "../../Domain/entities/Order";

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
}
