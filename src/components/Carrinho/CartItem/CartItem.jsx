import "./style.cartItem.css";
import produtoImg from "../../../images/cards_produtos/processadores/image2.png"
import { MdDelete } from "react-icons/md";
import { useState } from "react";

const CarItem = () => {

   const [quantity, setQuantity] = useState(1);

   const subtractQuantity = () => {
      if(quantity === 1){
         return;
      }
      setQuantity(previusValue => --previusValue)
   }

   const addQuantity = () => {
      setQuantity(previusValue => ++previusValue)
   }

   return(
      <div className="card-item-content">
         <img src={produtoImg} alt="Descrição da imagem" />

         <div className="card-item-infos">
            <h4>Processador Amd Ryzen 7 5800x, 5° Geração.</h4>
            <div className="item-quantidade">
               <p>Quantidade</p>
               <button onClick={subtractQuantity}>-</button>
               <span>{quantity}</span>
               <button onClick={addQuantity}>+</button>
            </div>
            <div className="item-preco">
               <p>Preço</p>
               <h1>R$ 1590,90</h1>
            </div>
         </div>

         <div className="excluir-item">
            <MdDelete />
         </div>
      </div>
   )
}

export default CarItem;