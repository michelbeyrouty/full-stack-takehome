import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import logo from "./assets/logo.svg";
import "./App.css";

function Home() {
  return (
    <>
      <p>
        Take me to the <Link to="/example">Example Page</Link>.
      </p>
    </>
  );
}

interface IFavorite {
  id: number;
  name: string;
  email: string;
}

function Example() {
  const [favorite, setFavorite] = React.useState<IFavorite | null>(null);

  async function handleHelloWorld() {
    const response = await fetch("/api/example", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: Math.floor(1 + Math.random() * 9) }),
    });
    const jsonResponse = await response.json();
    setFavorite(jsonResponse.favorite);
  }

  return (
    <div>
      {favorite ? (
        <p>
          My favorite Morty is <strong>{favorite.name}</strong>!
        </p>
      ) : null}
      <button type="button" onClick={handleHelloWorld}>
        Who's my favorite Morty?
      </button>
    </div>
  );
}

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
