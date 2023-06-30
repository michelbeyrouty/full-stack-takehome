import { Suspense } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import Loader from "../Loader/Loader";

export default function OrderDetailsView() {
  return (
    <Suspense fallback={<Loader title={"Order Details"} />}>
      <OrderDetails />
    </Suspense>
  );
}
