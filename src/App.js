import React, { useState } from "react";
import MainComponents from "./MainComponents";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <BrowserRouter>
      <div id="wrapper">
        <div
          className={
            isActive
              ? "sidebars bg-dark text-light  "
              : "sidebars bg-dark text-light active"
          }
        >
          <Sidebar />
        </div>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar isActive={isActive} handleToggle={handleToggle} />
            <MainComponents />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
