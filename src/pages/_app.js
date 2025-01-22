import { supabase } from "@/services/api/api";
import "@/styles/globals.css";
import { useState, useEffect, createContext } from "react";

export const ProductsContext = createContext();

export default function App({ Component, pageProps }) {

  const [products, setProducts] = useState()

  useEffect(() => {
    const fetchProducts = async () => {
      let { data: Products, error } = await supabase
        .from('Products')
        .select('*')    
        
      if(error){
        setProducts('')
        console.log('fetch products error: ', error)
        return
      }

      setProducts(Products)
    }

    fetchProducts();

    const interval = setInterval(() => {
      fetchProducts();
    }, 2000);

    return () => clearInterval(interval);

  }, [])

  return (
    <ProductsContext.Provider value={products}>
      <Component {...pageProps} />
    </ProductsContext.Provider>
    
  )
}
