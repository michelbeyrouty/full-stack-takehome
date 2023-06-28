import Card from "../Card/Card";

interface OrdersSkeletonProps {
  count: number[];
}

export default function OrdersSkeleton({ count }: OrdersSkeletonProps) {
  return count.map((number) => (
    <Card className={`ordersskeleton-wrapper`} key={number}>
      <div>Loading cities...</div>
      <div></div>
    </Card>
  ));
}
