import { Suspense } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";

export default function OrderDetailsView() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <OrderDetails />
    </Suspense>
  );
}
