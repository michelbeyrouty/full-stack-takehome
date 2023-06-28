// import { Suspense } from "react";
// import OrdersSkeleton from "./OrdersSkeleton/OrdersSkeleton";
import Orders from "./Orders/Orders";

export default function Home() {
  return (
    <div
      style={{
        height: "85%",
        width: "100%",
        overflowY: "auto",
        paddingRight: "24px",
        paddingLeft: "20px",
        paddingTop: "8px",
      }}
    >
      {/* <Suspense fallback={<OrdersSkeleton count={[1, 2, 3, 4, 5, 6]} />}> */}
      <Orders />
      {/* </Suspense> */}
    </div>
  );
}
