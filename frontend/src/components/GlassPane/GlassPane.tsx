import "./GlassPane.css";

interface GlassPane {
  children?: any[];
  style?: any;
}

export default function GlassPane({ children = [], style = {} }: GlassPane) {
  return (
    <div className="glasspane-wrapper" style={style}>
      {children}
    </div>
  );
}
