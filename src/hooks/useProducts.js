import { useEffect, useRef, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const isMounted = useRef(false);
  const fetchProducts = async () => {
    try {
      isMounted.current && setIsFetching(true);
      const result = await fetch("https://fakestoreapi.com/products");
      const data = await result.json();
      isMounted.current && setProducts(data);
      isMounted.current && setIsFetching(false);
    } catch (error) {
      console.log(error);
      isMounted.current && setIsFetching(false);
    }
  };
  useEffect(() => {
    isMounted.current = true;
    fetchProducts();
    return () => (isMounted.current = false);
  }, []);

  return {
    products,
    isFetching,
  };
};

export default useProducts;
