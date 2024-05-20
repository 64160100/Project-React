import React, { useState } from 'react';
import { BrowserRouter, NavLink, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import PageHome from './pages/Home';
import PageAbout from './pages/About';
import PageContact from './pages/Contact';
import Page404 from './pages/NoPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';


function App() {
  const [loggedIn, setLoggedIn] = useState(null)
  function handleLogin() {
    setLoggedIn(true)
  }

  function handleLogout() {
    setLoggedIn(false)
  }

  console.log(loggedIn)

  let activeClassName = "nav-active"
 
  return (
    <BrowserRouter>
      <header>
          <h1>hello world</h1>
      </header>
      <nav>
        <NavLink end to="/" className={({isActive}) => isActive ? activeClassName : undefined}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? activeClassName : undefined}>About</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? activeClassName : undefined}>contact</NavLink>
        <NavLink to="/dashboard" className={({isActive}) => isActive ? activeClassName : undefined}>Dashboard</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={ loggedIn ? <Navigate to="dashboard"/> : <PageHome login={handleLogin}/>} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/contact" element={<PageContact />} />
        <Route path="/dashboard" element={ loggedIn ? <Dashboard logout={handleLogout}/> : <Navigate to="/" state={"Hello!! I'm dashboard"}/>}>
          <Route path="settings" element={<p>Settings route</p>} />
        </Route>
        <Route path="/profile">
          <Route path=":userId" element={<Profile />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;