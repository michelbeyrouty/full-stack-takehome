import "./OrderDetails.css";
import { IOrderStatus, IUser } from "../../constants";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import useGetOrder from "../../hooks/useGetOrder";
import updateOrderStatus from "../../apis/updateOrderStatus";

export default function OrderDetails() {
  const { orderId } = useParams();
  const order = useGetOrder(orderId);

  async function updateStatus() {
    window.location.reload();
    const newStatus =
      order?.status == IOrderStatus.CLOSED
        ? IOrderStatus.OPEN
        : IOrderStatus.CLOSED;
    await updateOrderStatus(newStatus);
  }

  return (
    <Card className="orderdetails">
      <div className="orderdetails-header">
        <h2>{"Order Details"}</h2>
      </div>
      <div className="orderdetails-body">
        <div className="orderdetails-field">
          <div className="orderdetails-field-title">Name</div>
          <div>{order?.name}</div>
        </div>
        <div className="orderdetails-field">
          <div className="orderdetails-field-title">Status</div>
          <Button
            style={
              order?.status == IOrderStatus.CLOSED
                ? { backgroundColor: "#CC0000" }
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
            {order?.users.map((user: IUser) => (
              <div className="orderdetails-user">
                <text className="orderdetails-user-name">{user?.name}</text>
                <text className="orderdetails-user-email">{user?.email}</text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
