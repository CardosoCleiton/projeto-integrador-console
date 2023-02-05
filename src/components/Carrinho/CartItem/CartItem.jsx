import "./style.cartItem.css";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { useContext } from "react";
import { CarrinhoContext } from "../../../contexts/Carrinho/CarrinhoContext";

const CarItem = ({name, quantityProduct, price, image, id, removeProduct}) => {

   const [quantity, setQuantity] = useState(1);
   
   const carrinho = useContext(CarrinhoContext);

   const subtractQuantity = () => {
      if(quantity === 1){
         return;
      }
      const newQuantity = quantity - 1;
      carrinho.alterQuantityProduct(id, newQuantity);
      setQuantity(newQuantity);
   }

   const addQuantity = () => {
      const newQuantity = quantity + 1;
      carrinho.alterQuantityProduct(id, newQuantity);
      setQuantity(newQuantity);
   }


   const formatPrice = price?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

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
            <MdDelete onClick={() => removeProduct(id)}/>
         </div>
      </div>
   )
}

export default CarItem;