import "./Button.css";

export default function Button({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
}
