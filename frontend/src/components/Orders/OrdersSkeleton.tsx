import "./Orders.css";
import OrderCard from "../OrderCard/OrderCard";

interface OrdersSkeletonProps {
  count: number[];
}

export default function OrdersSkeleton({ count }: OrdersSkeletonProps) {
  return count.map((number) => (
    <div className="orders" key={number}>
      <OrderCard order={{ name: "loading..." }} key={number} />
    </div>
  ));
}
