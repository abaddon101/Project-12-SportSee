import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Dashboard from "./components/dashboard/dashboardComponents/dashboard-Parent/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* Route pour la page d'accueil */}
          <Route path="/dashboard/:id" element={<Home />} />{" "}
          {/* Route pour le tableau de bord */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
