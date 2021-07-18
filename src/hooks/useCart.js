import { useState, useEffect, useRef } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const isMounted = useRef(false);
  const isInCart = () => {
    return false;
  };
  const addToCart = (product) => {
    setCartItems((previousCartItems) => {
      const arr = previousCartItems;
      arr.push(product);
      return arr;
    });
  };
  const removeFromCart = (productID) => {};
  const fetchCartItems = () => {};
  useEffect(() => {
    isMounted.current = true;
    fetchCartItems();
    return () => (isMounted.current = false);
  }, []);
  return {
    cartItems,
    isInCart,
    addToCart,
    removeFromCart,
  };
};

export default useCart;
