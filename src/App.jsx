import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import CartModal from "./Components/CartModal";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Navbar cartCount={cart.length} openCart={toggleModal} />
      <ProductList addToCart={addToCart} cart={cart} />
      {isModalOpen && (
        <CartModal
          cart={cart}
          removeFromCart={removeFromCart}
          closeModal={toggleModal}
        />
      )}
    </div>
  );
};

export default App;
