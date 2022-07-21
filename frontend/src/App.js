import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Login from './routes/login';

export default function App() {
  const token = localStorage.getItem('user');

  if(!token) {
    return <Login/>
  }
  
  return (
    <div>
      <h1>PyToDo</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">register</Link>
      </nav>
    </div>
  );
}