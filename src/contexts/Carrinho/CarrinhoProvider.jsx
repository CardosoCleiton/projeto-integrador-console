// import { useEffect } from "react";
// import { useState } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CarrinhoContext } from "./CarrinhoContext";

export const CarrinhoProvider = ({children}) => {

   const [carrinho, setCarrinho] = useState([]);

   useEffect(() => {
      const allItems = localStorage.getItem("carrinho");
      if(allItems){
         setCarrinho(JSON.parse(allItems));
      }else{
         setCarrinho([])
      }
   }, [])

   const addItem = (product) => {
      setCarrinho((previusCarrinho) => {
         let newListProducts;
         //Verifica se o produto já existe no carrinho
         const index = previusCarrinho.findIndex(item => item.id === product.id);
         if(index >= 0){
            previusCarrinho[index].quantity = previusCarrinho[index].quantity + 1;
            previusCarrinho[index].totalPrice = previusCarrinho[index].quantity * previusCarrinho[index].unitPrice;
            newListProducts = [...previusCarrinho];
         }else{
            newListProducts = [...previusCarrinho, product];
         }
         localStorage.setItem("carrinho", JSON.stringify(newListProducts));
         return newListProducts;
      });
   }

   const removeItem = (productId) => {
      setCarrinho(previusCarrinho => {
         const newListProducts = previusCarrinho.filter(item => item.id !== productId);
         localStorage.setItem("carrinho", JSON.stringify(newListProducts));
         return newListProducts;
      });
   }

   const alterQuantity = (productId, quantity) => {
      setCarrinho(previusCarrinho => {
         const newListProducts = previusCarrinho;
         const index = newListProducts.findIndex(item => item.id === productId);
         if(index >= 0){
            newListProducts[index].quantity = quantity;
            newListProducts[index].totalPrice = newListProducts[index].unitPrice * quantity;
         }
         localStorage.setItem("carrinho", JSON.stringify(newListProducts));
         return newListProducts;
      });
   }

   const getItemById = (productId) => {
      const findProduct = carrinho.find(product => product.id === productId)
      return findProduct;
   }

   return(
      <CarrinhoContext.Provider value={{carrinho, addItem, removeItem, alterQuantity, getItemById}}>
         {children}
      </CarrinhoContext.Provider>
   )

}