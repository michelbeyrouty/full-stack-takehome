import "./OrderCard.css";
import Card from "../Card/Card";
import { IOrder } from "../../constants";

interface OrderCardProps {
  className?: string;
  order: IOrder;
}

export default function OrderCard({
  className = "",
  order = {},
}: OrderCardProps) {
  const { name, status } = order;
  return (
    <Card className={`ordercard-wrapper ${className}`}>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <div
          style={
            status == "CLOSED"
              ? { backgroundColor: "red" }
              : { backgroundColor: "#8FE743" }
          }
        >
          <text>{status?.toLowerCase()}</text>
        </div>
      </div>
    </Card>
  );
}
