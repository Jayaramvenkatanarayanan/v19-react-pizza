export interface Order {
  orderId: number;
}
export interface PastOrder {
  order_id: number;
  date: string;
  time: string;
  total?: number;
}
interface OrderItem {
  pizzaTypeId: string;
  name: string;
  category: string;
  description: string;
  quantity: number;
  price: number;
  total: number;
  size: string;
  image: string;
}
export interface FocusOrder {
  order: PastOrder;
  orderItems: OrderItem[];
}
