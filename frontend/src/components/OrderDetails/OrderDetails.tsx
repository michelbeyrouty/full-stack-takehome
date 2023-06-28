import "./OrderDetails.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import useGetOrder from "../../hooks/useGetOrder";
import updateOrderStatus from "../../apis/updateOrderStatus";

export default function OrderDetails() {
  const { orderId } = useParams();
  const order = useGetOrder(orderId || "");

  async function updateStatus() {
    console.log("pressed");
    const newStatus = order?.status == "CLOSED" ? "OPEN" : "CLOSED";
    await updateOrderStatus(newStatus);
    window.location.reload();
  }

  return (
    <Card className="orderdetails-wrapper">
      <div className="orderdetails-field">
        <div className="orderdetails-field-title">Name</div>
        <div>{order?.name}</div>
      </div>
      <div className="orderdetails-field">
        <div className="orderdetails-field-title">Status</div>
        <Button
          style={
            order?.status == "CLOSED"
              ? { backgroundColor: "red" }
              : { backgroundColor: "#8FE743" }
          }
          onClick={() => updateStatus()}
        >
          {order?.status}
        </Button>
      </div>
      <div className="orderdetails-field">
        <div className="orderdetails-field-title">Users</div>
        <div className="orderdetails-users">
          {order?.assignedUsers.map((user: any) => (
            <div className="test">
              <text className="orderdetails-username">{user?.name}</text>
              <text className="orderdetails-useremail">{user?.email}</text>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
