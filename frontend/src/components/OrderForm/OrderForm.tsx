import "./OrderForm.css";
import { useState } from "react";
import useGetUsers from "../../hooks/useGetUsers";
import createOrder from "../../apis/createOrder";
import Card from "../Card/Card";
import Input from "../Input/Input";
import Button from "../Button/Button";

const initial = { name: "", userIds: [] };

// TODO: clean functions

export default function OrderForm() {
  const [formState, setFormState] = useState(initial);
  const [error, setError] = useState("");
  const users = useGetUsers();

  async function handleSubmit(event: any) {
    event.preventDefault();

    try {
      createOrder(formState);
    } catch (e) {
      setError(`Could not submit work order`);
    } finally {
      setFormState({ ...initial });
    }
  }

  async function handleMultiSelect(event: any) {
    event.preventDefault();
    const options = event.target.options;
    const value: number[] = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        const selectedUserId = users.filter(
          (user) => user.email === options[i].value
        )[0].id;
        value.push(selectedUserId);
      }
    }

    console.log(value);
    setFormState((s) => ({ ...s, userIds: value }));
  }

  return (
    <Card className="orderform">
      <div className="orderform-header">
        <h2>{"Submit Work Order"}</h2>
      </div>
      <form onSubmit={handleSubmit} className="orderform-form">
        <div className="form-field">
          <div className="form-field-title">Order Name</div>
          <Input
            required
            placeholder="name"
            value={formState.name}
            onChange={(e: any) =>
              setFormState((s) => ({ ...s, name: e.target.value }))
            }
          />
        </div>
        <div className="form-field">
          <div className="form-field-title">
            Users <span>Press CTRL for multi-select</span>
          </div>
          <select
            name="version"
            onChange={handleMultiSelect}
            value={formState.users}
            className="form-select"
            multiple
          >
            {users?.map((user) => (
              <option value={user.email} key={user.email}>
                {user.email}
              </option>
            ))}
          </select>
        </div>
        <div className="form-button">
          <Button type="submit">{"Submit Order"}</Button>
        </div>
      </form>
    </Card>
  );
}

{
}
