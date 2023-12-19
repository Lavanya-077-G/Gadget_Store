import React from 'react';
import ProductCard from './ProductCard';
import Gadgets from '../data/Gadgets';

const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Gadgets.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;

