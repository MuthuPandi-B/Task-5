import React from "react";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl flex text-center font-lobster font-bold bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
        <img
          className="h-7 w-7 rounded-full mr-4"
          src="https://thumbs.dreamstime.com/b/online-shop-logo-design-vector-illustrtaion-mobile-shopping-template-186928870.jpg"
          alt=""
        />
        One Click Shopping
      </h1>
      <button onClick={openCart} className="bg-blue-500 px-4 py-2 rounded flex">
        <span>
          <img
            className="h-5 w-5 rounded-full mr-2"
            src="https://w7.pngwing.com/pngs/603/776/png-transparent-shopping-cart-icon-shopping-cart-blue-orange-baby-products-thumbnail.png"
            alt=""
          />
        </span>
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
