import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
       <> <p>Your cart is empty.</p>
        <p className="text-xl font-semibold mt-4">
        Total Price: $ 0
      </p></>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center mb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <p className="text-gray-800">{item.name}</p>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="max-w-xs rounded overflow-hidden shadow-lg m-5 bg-white border border-red p-2"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="text-xl font-semibold mt-4">
            Total Price: ${calculateTotalPrice()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;




