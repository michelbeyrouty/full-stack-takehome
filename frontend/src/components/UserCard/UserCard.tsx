import "./UserCard.css";
import Card from "../Card/Card";
import { IUser, IOrderStatus } from "../../constants";

interface OrderCardProps {
  className?: string;
  user: IUser;
}

export default function UserCard({ className, user }: OrderCardProps) {
  const { name, id, email } = user;
  return (
    <Card className={`usercard ${className}`}>
      <div>
        <div>{name}</div>
      </div>
      <div>
        <ul className="UserCard-list">
          <li>{`id: ${id}`}</li>
          <li>{`email: ${email}`}</li>
        </ul>
      </div>
    </Card>
  );
}
