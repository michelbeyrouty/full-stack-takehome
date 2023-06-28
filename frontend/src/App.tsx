import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import OrdersView from "./components/OrdersView/OrdersView";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import OrderForm from "./components/OrderForm/OrderForm";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/orders" element={<OrdersView />} />
          <Route path="/create" element={<OrderForm />} />
          <Route path="/orders/:orderId" element={<OrderDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}
