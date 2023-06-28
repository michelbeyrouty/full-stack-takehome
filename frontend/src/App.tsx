import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/orders" element={<Home />} />
          <Route path="/create" element={<Home />} />
          <Route path="/orders/:orderId" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}
