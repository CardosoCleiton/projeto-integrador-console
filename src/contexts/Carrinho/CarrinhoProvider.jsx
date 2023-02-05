// import { useEffect } from "react";
// import { useState } from "react";
import { CarrinhoContext } from "./CarrinhoContext";

export const CarrinhoProvider = ({children}) => {

   const getProducts = () => {
      const products = localStorage.getItem("products");
      if(products){
         return JSON.parse(products);
      }else{
         return [];
      }
   }

   const setProducts = (product) => {
      let allProducts = getProducts();
      allProducts.push(product);
      localStorage.setItem("products", JSON.stringify(allProducts));
   }

   const alterQuantityProduct = (productId, quantity) => {
      const allProducts = getProducts();
      const index = allProducts.findIndex(product => product.id === productId);
      if(index < 0){
         return;
      }
      allProducts[index].quantity = quantity;
      localStorage.setItem("products", JSON.stringify(allProducts));
   }

   const deleteProduct = (productId) => {
      const allProducts = getProducts();
      let newArrayProducts = allProducts.filter(product => product.id !== productId);
      if(newArrayProducts.length === 0){
         newArrayProducts = [];
      }
      console.log(newArrayProducts);
      localStorage.setItem("products", JSON.stringify(newArrayProducts));
   }

   return(
      <CarrinhoContext.Provider value={{getProducts, setProducts, alterQuantityProduct, deleteProduct}}>
         {children}
      </CarrinhoContext.Provider>
   )

}