import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BasePage from "./components/Pages/BasePage/BasePage";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import UserPanel from "./components/Pages/UserPanel/UserPanel";

function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <Routes>
        <Route path="/rebates" element={<BasePage />} />
        <Route path="/collections" element={<BasePage />} />
        <Route path="/bedrooms" element={<BasePage />} />
        <Route path="/dining-rooms" element={<BasePage />} />
        <Route path="/rooms" element={<BasePage />} />
        <Route path="/complementary" element={<BasePage />} />
        <Route path="/mattresses" element={<BasePage />} />
        <Route path="/decoration" element={<BasePage />} />
        <Route path="/blog" element={<BasePage />} />
        <Route path="/user" element={<UserPanel />} />
      </Routes>
    </>
  );
}

export default App;
