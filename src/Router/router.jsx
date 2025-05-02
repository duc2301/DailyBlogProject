import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Pages/HomePage/Index.jsx';
import Login from '../Pages/LoginPage/Index.jsx'
import Signup from '../Pages/SignUpPage/Index.jsx'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
