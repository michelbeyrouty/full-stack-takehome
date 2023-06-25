import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Example from "./components/Example";
import Home from "./components/Home";
import logo from "./assets/logo.svg";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="bg-blue h-screen w-screen flex flex-col items-center justify-center text-white text-center">
        <img
          src={logo}
          className="animate-appLogoScale pointer-events-none h-[20vmin]"
          alt="logo"
        />
        <div className="mt-[40px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/example" element={<Example />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
