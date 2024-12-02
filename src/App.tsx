import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
