import "./GlassPane.css";

interface GlassPane {
  children?: any[];
  className?: string;
}

export default function GlassPane({ children, className }: GlassPane) {
  return <div className={`glasspane ${className}`}>{children}</div>;
}
