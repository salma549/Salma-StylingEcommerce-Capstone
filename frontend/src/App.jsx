import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import { Men } from './components/Men';
import {Women} from './components/Women';
import ProductDetail from './components/ProductDetails';
import Cart from './components/Cart';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;