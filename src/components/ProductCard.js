import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

const ProductCard = ({ product, addToCart }) => {

  const handleAddToCart = () => {
    addToCart({ ...product });
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-white border border-red p-4">
      <img className="w-full" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-red rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">${product.price}</span>
        <button onClick={handleAddToCart} className="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded mt-2">Add to Cart</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductCard);


