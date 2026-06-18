import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";

export default function App() {
  return (
    <div className="app-root">
      <header className="site-header">
        <h1>Kodnest</h1>
        <Navbar />
      </header>

      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
}
