import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';//for router-com v6
import Home from './components/Home';
import Shop from './components/Shop';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;