import { Suspense } from "react";
import OrdersSkeleton from "../OrdersSkeleton/OrdersSkeleton";
import Orders from "../Orders/Orders";

export default function OrdersView() {
  return (
    <Suspense fallback={<OrdersSkeleton count={[1, 2, 3, 4, 5, 6]} />}>
      <Orders />
    </Suspense>
  );
}
