import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Popup from './Popup';
import { closePopup } from './actions';
import { connect } from 'react-redux';



function App({showPopup}) {
  return (
  
    <Router>
      <div className="App">
        <Navbar />
        <main className="container mx-auto my-4">
         <Routes>
         <Route exact path="/" element={<ProductList />}  />
         {/* <Route exact path="/items/:id" element={<ProductDetails/>} /> */}
         <Route exact path="/cart" element={<Cart />} />
         
        </Routes>
        </main>
        {showPopup && (
          <Popup />
        )}
      </div>
    </Router>
  );
}
const mapStateToProps = (state) => ({
  showPopup: state.showPopup,
  cartItems: state.cartItems,
});

const mapDispatchToProps = {
  onClose: closePopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

