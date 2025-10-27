import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Add from "./components/Add.jsx";
import Update from "./components/Update.jsx";
import Delete from "./components/Delete.jsx";

function App() {
  return (
    <>
      <h1>Employee Management System</h1>
      <nav style={{ display: "flex", gap: "25px" }}>
        <Link to="/">Load</Link>
        <Link to="/add">Add</Link>
        <Link to="/update">Update</Link>
        <Link to="/delete">Delete</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </>
  );
}

export default App;
