import React from 'react';
import Navigation from './Navigation';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import './App.css';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
