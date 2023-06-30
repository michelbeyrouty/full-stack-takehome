import "./Loader.css";
import Card from "../Card/Card";

interface LoaderProps {
  title: string;
}

export default function Loader({ title }: LoaderProps) {
  return (
    <Card className="loader">
      <div className="loader-header">
        <h2>{title}</h2>
      </div>
      <div className="loader-container">
        <span className="loader-spinner"></span>
      </div>
    </Card>
  );
}
