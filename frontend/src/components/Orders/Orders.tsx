import "./Orders.css";
import OrderCard from "../OrderCard/OrderCard";
import { delay } from "../../lib/async";
import { Link } from "react-router-dom";

// function getData() {
//   // await delay(2000);

//   return orders;
// }

export default function Orders() {
  const orders = [
    {
      id: 1,
      name: "A normal work order womqfpwmf qiowfn",
      status: "OPEN",
    },
    {
      id: 2,
      name: "A normal work order",
      status: "OPEN",
    },
    {
      id: 3,
      name: "A normal work order",
      status: "CLOSED",
    },
    {
      id: 4,
      name: "A normal work order",
      status: "OPEN",
    },
    {
      id: 5,
      name: "A normal work order",
      status: "CLOSED",
    },
  ];

  return orders
    .sort((a, b) => (a.status < b.status ? 1 : -1))
    .map((order) => (
      <div className="orders-wrapper" key={order.id}>
        <Link
          to={`/orders/${order.id}`}
          style={{ textDecoration: "none", width: "100%", color: "inherit" }}
        >
          <OrderCard order={order} />
        </Link>
      </div>
    ));
}
