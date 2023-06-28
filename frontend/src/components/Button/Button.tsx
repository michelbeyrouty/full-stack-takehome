import "./Button.css";

interface ButtonProps {
  className?: string;
  children?: any;
  style?: any;
  onClick?: any;
}

export default function Button({
  className = "",
  children = [],
  style = {},
  onClick = () => {},
}: ButtonProps) {
  return (
    <button className={`button ${className}`} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
