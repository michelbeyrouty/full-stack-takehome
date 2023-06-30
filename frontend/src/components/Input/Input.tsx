import "./Input.css";

export default function Input({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"input">) {
  return <input className={`input ${className}`} {...props} />;
}
