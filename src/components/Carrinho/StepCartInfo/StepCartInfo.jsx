import CarItem from "../CartItem/CartItem";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import "./style.stepCartInfo.css";
import Input from "../../Ui/Input/Input";
import DetailsFreight from "../DetailsFreight/DetaisFreight";
import Carrinho from "../../../pages/Carrinho/Carrinho";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const StepCarInfo = ({screen, carrinho, subTotal, alterSubTotal, frete, total, calcularFrete, setFrete}) => {
   
   const setScreen = () => {
      screen("login");
      return <Carrinho />
   }

   const [cep, setCep] = useState("");
   const [tiposFrete, setTiposFrete] = useState([]);

   const validateInputCep = (event) => {
      let value = event.target.value;
      if(value.includes(".")){
         value = value.replace(".", "");
      }
      if(value.length > 8){
         return;
      }
      if(!isNaN(value)){
         setCep(value);
      }
      return;
   }

   const calcularPrecoFrete = async () => {
      if(cep.length < 8){
         toast.error("CEP Inválido", {
            position: "top-right",
            theme: "dark"
         });
      }
      const valueFrete = await calcularFrete(cep);
      setTiposFrete(valueFrete);
   }

   return(
      <>
         <div className={`area-items-price ${carrinho.length === 0 ? "set-display-none" : ""}`}>
            <div className="area-products">
               {carrinho.map(product => {
                  return <CarItem 
                           price={product.unitPrice}
                           name={product.name}
                           image={product.image}
                           key={product.id}
                           id={product.id}
                           totalPrice={product.totalPrice}
                           alterSubTotal={alterSubTotal}
                        />
               })}
            </div>

            <div className="area-price">
               <div className="card-price">
                  <div className="sub-total">
                     <div><strong>Subtotal</strong><span>{subTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span></div>
                     <div><strong>Frete</strong><span>{frete.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span></div>
                  </div>
                  <div className="area-price-total">
                     TOTAL<span>{total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
                  </div>
                  <div className="area-parcelamento">
                     <BsFillCreditCard2BackFill />
                     <span>Em até 12x com juros</span>
                  </div>
                  <button onClick={setScreen}>Fechar Pedido &#8594;</button>
               </div>
            </div>
         </div>

         <div className={`area-frete ${carrinho.length === 0 ? "set-display-none" : ""}`}>
            <p>Consultar frete e prazo de entrega</p>
            <Input placeholder="Somente números" type="text" onChange={validateInputCep} value={cep}/>
            <button onClick={calcularPrecoFrete}>Consultar</button>

            <div className="options-freight">
               {tiposFrete.map((frete, index) => {
                  return <DetailsFreight tipofrete={frete.type} deadline={frete.deadline} price={frete.price} key={index} id={frete.typeId} setFrete={setFrete}/>
               })}
            </div>
         </div>

         <div className={`set-display-none ${carrinho.length === 0 ? "area-carrinho-vazio" : ""}`}>
            <h1>Você ainda não adicionou nada em seu carrinho.</h1>
            <Link to="/">Clique aqui e começe a comprar </Link>
         </div>
      </>
   )
}

export default StepCarInfo;