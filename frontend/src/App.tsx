import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/view" element={<Home />} />
          <Route path="/create" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}
