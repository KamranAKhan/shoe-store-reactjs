import React from 'react';
import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import AboutUs from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import Products from './components/pages/Products';
import Home from './components/pages/Home';
import ProductDetails from './components/pages/ProductDetails';

import ContextProvider from './state_management/ContextProvider';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';

import PageNotFound from './components/pages/PageNotFound';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="products" element={<Products />}></Route>
            <Route exact path="products/:productId" element={<ProductDetails animate={true} />}></Route>
            <Route path="about" element={<AboutUs />}></Route>
            <Route path="contact" element={<ContactUs />}></Route>
            <Route path="contact" element={<ContactUs />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
