import { Suspense } from "react";
import Productivity from "../Productivity/Productivity";
import Loader from "../Loader/Loader";

export default function ProductivityView() {
  return (
    <Suspense fallback={<Loader title={"Unproductive Users"} />}>
      <Productivity />
    </Suspense>
  );
}
