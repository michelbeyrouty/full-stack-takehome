import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <p>
        Take me to the <Link to="/example">Example Page</Link>.
      </p>
    </>
  );
}
