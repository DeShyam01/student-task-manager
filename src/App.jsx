import React, { use, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Aside from "./components/Aside.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Tasks from "./pages/Tasks.jsx";
import Login from "./pages/Login.jsx";
import Landing from "./pages/Landing.jsx";
import ProtectedRoute from "./services/ProtectedRoute.jsx";
import "./App.css";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    } else {
      window.localStorage.clear();
      setLoggedIn(false);
    }
  });

  const Content = () => {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />
      </Routes>
    );
  };

  return (
    <div className="App">
      {window.location.pathname !== "/" &&
        window.location.pathname !== "/login" &&
        isLoggedIn && <Aside />}
      {window.location.pathname !== "/" &&
        window.location.pathname !== "/login" &&
        isLoggedIn && <Header />}
      <Content />
    </div>
  );
};

export default App;
