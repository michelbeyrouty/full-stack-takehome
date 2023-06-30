import "./Card.css";

interface CardProps {
  style?: any;
  children?: any;
  className?: string;
}

export default function Card({ style, children, className }: CardProps) {
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
}
