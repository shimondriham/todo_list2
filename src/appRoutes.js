import React from 'react'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from './comps/home';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <header className='container-fluid'>
        <nav className='container'>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
      </Routes>

    </BrowserRouter>
  )
}
