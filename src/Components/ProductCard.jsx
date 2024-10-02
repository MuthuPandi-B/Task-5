import React, { useState } from 'react';

const ProductCard = ({ product, addToCart, cart }) => {
  const [alert, setAlert] = useState('');

  const handleAddToCart = () => {
    if (cart.some((item) => item.id === product.id)) {
      setAlert('Item already added to the cart');
      setTimeout(() => setAlert(''), 3000);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="bg-slate-200 p-4 rounded shadow">
      {alert && <p className="text-red-500">{alert}</p>}
      <img className="w-40 h-40  mx-auto mix-blend-multiply" src={product.image} alt={product.title} />
      <h1 className="text-lg font-semibold text-center ">{product.title}</h1>
      <h2 className="text-lg font-semibold text-center">${product.price}</h2>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded mx-auto block ">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
