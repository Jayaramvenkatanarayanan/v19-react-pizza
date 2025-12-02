import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { OrderUsecase } from "../../Domain/usecases/Order.usecase";
import { OrderRepositoryImpl } from "../../Data/repositories/OrderRepositoryImpl";

export default function Past() {
  const [page, setPage] = useState<number>(1);
  async function getPastOrder(page: number) {
    return await new OrderUsecase(new OrderRepositoryImpl()).getPastOrders(
      page
    );
  }
  const { isPending, data } = useQuery({
    queryKey: ["past-order", page],
    queryFn: () => getPastOrder(page),
    staleTime: 5000,
  });

  if (isPending) {
    return (
      <div className="past-orders">
        <h2>LOADING …</h2>
      </div>
    );
  }
  return (
    <div className="past-orders">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Date</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((order) => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.date}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pages">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <div>{page}</div>
        <button disabled={(data?.length ?? 0) < 10} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
