import "./Productivity.css";
import { IUser } from "../../constants";
import UserCard from "../UserCard/UserCard";
import Card from "../Card/Card";
import useGetInactiveUsers from "../../hooks/useGetInactiveUsers";

export default function Productivity() {
  const inactiveUsers = useGetInactiveUsers();

  return (
    <Card className="productivity">
      <div className="productivity-header">
        <h2>{"Unproductive Users"}</h2>
      </div>
      <div className="productivity-body">
        {inactiveUsers?.map((user: IUser) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </Card>
  );
}
