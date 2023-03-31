import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import World from "./pages/World";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import Tech from "./pages/Tech";
import Sports from "./pages/Sports";
import Science from "./pages/Science";
import America from "./components/TabAmericaComponent";
import "./App.css";

function App() {
  const Router = () => {
    return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home/america" element={<America />} />
        <Route path="/world" element={<World />} />
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/health" element={<Health />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/science" element={<Science />} />
      </Routes>
    );
  };

  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;
