import "./Card.css";

interface CardProps {
  style?: any;
  children?: any;
  className?: string;
}

export default function Card({ style, children, className }: CardProps) {
  return (
    <div className={`card-wrapper ${className}`} style={style}>
      {children}
    </div>
  );
}
