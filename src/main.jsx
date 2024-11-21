import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Navbar from "./Components/Navbar.jsx";
createRoot(document.getElementById("root")).render(
  <Router>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<App />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  </Router>
);
