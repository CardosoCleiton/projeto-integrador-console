import CarItem from "../CartItem/CartItem";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import "./style.stepCartInfo.css";
import Input from "../../Ui/Input/Input";
import DetailsFreight from "../DetailsFreight/DetaisFreight";
import Carrinho from "../../../pages/Carrinho/Carrinho";

const StepCarInfo = ({screen}) => {

   const setScreen = () => {
      screen("login");
      return <Carrinho />
   }

   return(
      <>
         <div className="area-items-price">
            <div className="area-products">
               <CarItem />
               <CarItem />
            </div>

            <div className="area-price">
               <div className="card-price">
                  <div className="sub-total">
                     <div><strong>Subtotal</strong><span>R$ 1285,30</span></div>
                     <div><strong>Frete</strong><span>R$ 85,30</span></div>
                  </div>
                  <div className="area-price-total">
                     TOTAL<span>R$ 1285,30</span>
                  </div>
                  <div className="area-parcelamento">
                     <BsFillCreditCard2BackFill />
                     <span>Em até 12x com juros</span>
                  </div>
                  <button onClick={setScreen}>Fechar Pedido &#8594;</button>
               </div>
            </div>
         </div>

         <div className="area-frete">
            <p>Consultar frete e prazo de entrega</p>
            <Input placeholder="00000-000"/>
            <button>Consultar</button>

            <div className="options-freight">
               <DetailsFreight id="correios" name="freight"/>
               <DetailsFreight id="pac" name="freight" />
            </div>
         </div>
      </>
   )
}

export default StepCarInfo;