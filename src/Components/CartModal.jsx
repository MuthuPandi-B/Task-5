import React from 'react';

const CartModal = ({ cart, removeFromCart, closeModal }) => {
  const totalvalue = cart.reduce((acc ,item)=>acc+item.price,0);
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold">Cart Items</h2>
        {cart.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between gap-10 py-4 items-center">
              <span>{item.title}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-2 rounded">
                Remove from Cart 
              </button>
           
            </div>
          ))
        )}
       <div className='flex justify-between'>
       <span >Total Value:</span>
        <span className='text-lg font-bold'>${totalvalue}</span>
        <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 mt-4 justify-end rounded">
          Close
        </button>
       </div>
        
      </div>
    </div>
  );
};

export default CartModal;
