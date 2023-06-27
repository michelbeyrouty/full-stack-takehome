import "./Card.css";

interface CardProps {
  style?: any;
  children?: any[];
}

export default function Card({ style = {}, children = [] }: CardProps) {
  return (
    <div className="card-wrapper" style={style}>
      {children}
    </div>
  );
}
