import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//  Pages Import
import Dashboard from "./home/dashboard/Dashboard";
import Income from "./pages/income/Income";
import Expense from "./pages/expense/Expense";
//
import DATA from "./assets/data/data";
import NotFound from "./components/NotFound";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isActive, setActive] = useState("false");
  const [data, setData] = useState(DATA);
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
            <div className="container-fluid topbarpt">
              <Routes
              // baseline="/income-expense-react"
              >
                <Route path="/" exact element={<Dashboard alldata={data} />} />
                <Route
                  path="/"
                  element={<Navigate replace to="/income-expense-react" />}
                />
                <Route
                  path="/task"
                  exact
                  element={<Income data={data.incomeDetails} />}
                />
                <Route
                  path="/expense"
                  exact
                  element={<Expense data={data.expenseDetails} />}
                />
                <Route path="*" exact element={<NotFound />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
