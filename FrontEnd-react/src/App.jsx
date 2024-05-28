import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PageHome from './pages/Home';
import PageAbout from './pages/About';
import PageContact from './pages/Contact';
import Page404 from './pages/NoPage';
import PageDashboard from './pages/Dashboard';
import PageProfile from './pages/Profile';
import Login from './pages/Login/Login';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/contact" element={<PageContact />} />
        <Route path="/dashboard" element={<PageDashboard />} />
        <Route path="/profile" element={<PageProfile />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<Login/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;