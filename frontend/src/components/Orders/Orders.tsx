import "./Orders.css";
import OrderCard from "../OrderCard/OrderCard";
import useGetOrders from "../../hooks/useGetOrders";
import { Link } from "react-router-dom";

export default function Orders() {
  const orders = useGetOrders();

  return orders ? (
    orders
      .sort((a) => (a.status == "OPEN" ? -1 : 1))
      .map((order: any) => (
        <div className="orders-wrapper" key={order.id}>
          <Link
            to={`/orders/${order.id}`}
            style={{ textDecoration: "none", width: "100%", color: "inherit" }}
          >
            <OrderCard order={order} />
          </Link>
        </div>
      ))
  ) : (
    <></>
  );
}
