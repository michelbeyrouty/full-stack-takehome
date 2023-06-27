import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Example from "./components/Example";
import Home from "./components/Home";
import logo from "./assets/logo.svg";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <img src={logo} className="app-logo" alt="logo" />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/example" element={<Example />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
