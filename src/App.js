import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Popup from './Popup';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setPopupMessage(`${item.name} added to the cart!`);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container mx-auto my-4">
         <Routes>
         <Route exact path="/" element={<ProductList addToCart={addToCart}/>}  />
         {/* <Route exact path="/items/:id" element={<ProductDetails/>} /> */}
         <Route exact path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
         
        </Routes>
        </main>
        {showPopup && (
          <Popup message={popupMessage} onClose={closePopup} />
        )}
      </div>
    </Router>
  );
}

export default App;






