import "./Orders.css";
import { IOrderStatus, IOrder } from "../../constants";
import OrderCard from "../OrderCard/OrderCard";
import useGetOrders from "../../hooks/useGetOrders";
import { Link } from "react-router-dom";

export default function Orders() {
  const orders = useGetOrders();

  return orders ? (
    orders
      .sort((order: IOrder) => (order.status == IOrderStatus.OPEN ? -1 : 1))
      .map((order: IOrder) => (
        <div className="orders" key={order.id}>
          <Link className="orders-link" to={`/orders/${order.id}`}>
            <OrderCard order={order} />
          </Link>
        </div>
      ))
  ) : (
    <></>
  );
}
