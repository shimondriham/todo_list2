import React from 'react'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import AppTodo from './comps/appTodo';
import Home from './comps/home';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <header className='container-fluid'>
        <nav className='container'>
          <Link to="/" className='me-2'>Home</Link>
          <Link to="/todo" className='me-2'>Todo list</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/todo" element={<AppTodo/>}>Home</Route>
      </Routes>

    </BrowserRouter>
  )
}
