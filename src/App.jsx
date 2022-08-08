import React from 'react';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register/Register';
import Login from './pages/Login';
import Cart from './pages/Cart/Cart';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = true;
  const PAYPAL_CLIENT_ID = "AWJMD2M63SB4mGbd4K27ZzQHChSpaaQh7ngD6oQZEVJRBrkLEr1-KWbemTfPheNBg7VRFcMjZbmVmEnY";
  return (
    <PayPalScriptProvider options={{"client-id":PAYPAL_CLIENT_ID}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:cat" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />

        </Routes>
      </Router>
    </PayPalScriptProvider>
  )
}

export default App;
