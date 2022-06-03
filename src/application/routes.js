import Menu from "../components/menu/Menu.js";
import React from "react";
import HomeContainer from "../components/main/Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  </Router>
);
