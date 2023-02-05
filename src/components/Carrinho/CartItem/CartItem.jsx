import "./style.cartItem.css";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { useContext } from "react";
import { CarrinhoContext } from "../../../contexts/Carrinho/CarrinhoContext";
import { useEffect } from "react";

const CarItem = ({name, price, image, id, totalPrice, alterSubTotal}) => {

   const carrinhoProvider = useContext(CarrinhoContext);

   const [quantity, setQuantity] = useState(1);
   const [pricePerQuantity, setPricePerQuantity] = useState(totalPrice);
   
   useEffect(() => {
      const getQuantity = carrinhoProvider.getItemById(id);
      setQuantity(getQuantity.quantity);
   }, []); //eslint-disable-line
   
   const subtractQuantity = () => {
      if(quantity === 1){
         carrinhoProvider.removeItem(id)
      }
      setQuantity(previusQuantity => {
         //Alterando subtotal
         alterSubTotal(previusSubTotal => {
            return previusSubTotal + price;
         });
         //Nova quantidade
         const newQuantity = previusQuantity - 1;
         setPricePerQuantity(newQuantity * price);
         carrinhoProvider.alterQuantity(id, newQuantity);
         return newQuantity;
      })
   }

   const addQuantity = () => {
      //Alterando subtotal
      alterSubTotal(previusSubTotal => {
         return previusSubTotal + price;
      });

      //Nova Quantidade
      setQuantity(previusQuantity => {
         const newQuantity = previusQuantity + 1;
         setPricePerQuantity(newQuantity * price);
         carrinhoProvider.alterQuantity(id, newQuantity);
         return newQuantity;
      })
   }

   const formatPrice = pricePerQuantity?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

   return(
      <div className="card-item-content">
         <img src={image} alt="Descrição da imagem" />

         <div className="card-item-infos">
            <h4>{name}</h4>
            <div className="item-quantidade">
               <p>Quantidade</p>
               <button onClick={subtractQuantity}>-</button>
               <span>{quantity}</span>
               <button onClick={addQuantity}>+</button>
            </div>
            <div className="item-preco">
               <p>Preço</p>
               <h1>{formatPrice}</h1>
            </div>
         </div>

         <div className="excluir-item">
            <MdDelete onClick={() => carrinhoProvider.removeItem(id)}/>
         </div>
      </div>
   )
}

export default CarItem;