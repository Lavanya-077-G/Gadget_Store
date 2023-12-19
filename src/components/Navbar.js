import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">Gadget's Store</Link>
        <div className="flex space-x-4">
          {/* <Link to="/items" className="text-white">Items</Link> */}
          <Link to="/cart" className="text-white">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
