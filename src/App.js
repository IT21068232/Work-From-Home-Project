import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}
