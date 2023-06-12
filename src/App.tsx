import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Dashboard from "./components/dashboard/dashboardComponents/dashboard-Parent/Dashboard";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/:id" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
