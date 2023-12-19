import React from 'react';
import foodItems from '../data/Gadgets';

const ProductDetails = ({ match }) => {
  const product = foodItems.find(item => item.id === parseInt(match.params.id, 10));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold">{product.name}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-red font-semibold">${product.price}</p>
    </div>
  );
};

export default ProductDetails;

