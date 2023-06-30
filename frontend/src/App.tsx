import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import OrdersView from "./components/OrdersView/OrdersView";
import OrderDetailsView from "./components/OrderDetailsView/OrderDetailsView";
import ProductivityView from "./components/ProductivityView/ProductivityView";
import OrderFromView from "./components/OrderFromView/OrderFromView";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/productivity" element={<ProductivityView />} />
          <Route path="/orders" element={<OrdersView />} />
          <Route path="/create" element={<OrderFromView />} />
          <Route path="/orders/:orderId" element={<OrderDetailsView />} />
        </Routes>
      </Layout>
    </Router>
  );
}
