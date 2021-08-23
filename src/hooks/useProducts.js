import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const result = await fetch("https://fakestoreapi.com/products");
      const data = await result.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
    return () => {};
  }, []);

  return {
    products,
  };
};

export default useProducts;
