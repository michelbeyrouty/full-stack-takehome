import "./OrdersSkeleton.css";
import OrderCard from "../OrderCard/OrderCard";

interface OrdersSkeletonProps {
  count: number[];
}

export default function OrdersSkeleton({ count }: OrdersSkeletonProps) {
  return count.map((number) => (
    <div className="ordersskeleton-wrapper" key={number}>
      <OrderCard order={{ name: "loading..." }} key={number} />
    </div>
  ));
}
