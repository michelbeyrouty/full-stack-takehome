import "./OrderCard.css";
import Card from "../Card/Card";
import { IOrder, IOrderStatus } from "../../constants";

interface OrderCardProps {
  className?: string;
  order: IOrder;
}

export default function OrderCard({ className, order }: OrderCardProps) {
  const { name, status } = order;
  return (
    <Card className={`ordercard ${className}`}>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <div
          style={
            status == IOrderStatus.CLOSED
              ? { backgroundColor: "#CC0000" }
              : { backgroundColor: "#8FE743" }
          }
        >
          <text>{status?.toLowerCase()}</text>
        </div>
      </div>
    </Card>
  );
}
