import React from 'react';
import ProductCard from './ProductCard';
import Gadgets from '../data/Gadgets';

const ProductList = ({ addToCart }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {Gadgets.map((item) => (
        <ProductCard key={item.id} product={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;

