import { Suspense } from "react";
import OrderForm from "../OrderForm/OrderForm";
import Loader from "../Loader/Loader";

export default function OrderFromView() {
  return (
    <Suspense fallback={<Loader title={"Submit Work Order"} />}>
      <OrderForm />
    </Suspense>
  );
}
