import { useState, useEffect, useRef, createContext, useContext } from "react";
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const isMounted = useRef(false);
  const isInCart = (productID) => {
    const item = cartItems.find((item) => item._id === productID);
    return Boolean(item);
  };
  const addToCart = (product) => {
    const arr = [...cartItems, product];
    isMounted.current && setCartItems(arr);
  };
  const removeFromCart = (productID) => {
    const arr = cartItems.filter((item) => item._id !== productID);
    isMounted.current && setCartItems(arr);
  };
  const clearCart = () => {
    isMounted.current && setCartItems([]);
  };
  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  const value = {
    cartItems,
    isInCart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useCartContext = () => useContext(AppContext);

export default useCartContext;
