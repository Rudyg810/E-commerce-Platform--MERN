import { useState, useContext, createContext } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setcart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setcart]}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };