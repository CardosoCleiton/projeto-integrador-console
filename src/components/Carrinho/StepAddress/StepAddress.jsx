import "./style.stepAddress.css";
import imageMapa from "../../../images/mapa.svg";
import DetailsFreight from "../DetailsFreight/DetaisFreight"
import ButtonSuccess from "../../Ui/ButtonSuccess/ButtonSuccess";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext"
import { Link } from "react-router-dom"

export const StepAddress = ({screen}) => {

   const auth = useContext(AuthContext);

   const setPreviusScreen = () => {
      if(auth.user){
         screen("cartInfo");
      }else{
         screen("login");
      }
   }

   return(
      <>
         <div className="login-area">
            <div className="login-area-form">
               <h1>Selecione um de seus endereços cadastrados para entrega do pedido:</h1>
               <div className="address-input">
                  <input type="radio" id="address1" name="address-pedido" className="radio-address"/>
                  <label htmlFor="address1" className="step-label-address">Avenida Paulista, 253 Casa A, Centro, São Paulo SP</label>
               </div>

               <div className="address-input">
                  <input type="radio" id="address2" name="address-pedido" className="radio-address"/>
                  <label htmlFor="address2" className="step-label-address">Rua Augusta, 253 Casa A, Centro, São Paulo SP</label>
               </div>
               
               <div className="address-input">
                  <input type="radio" id="address3" name="address-pedido" className="radio-address"/>
                  <label htmlFor="address3" className="step-label-address">Tv Fulano da Silva 253 Casa A, Centro, São Paulo SP</label>
               </div>
               
               <Link to="#" className="atualizar-endereco">Atualizar Endereço</Link>

               <div className="opcoes-frete">
                  <DetailsFreight id="correios" name="freight"/>
                  <DetailsFreight id="pac" name="freight" />
               </div>

            </div>
            <div className="login-area-border"></div>

            <div className="login-area-image">
               <img src={imageMapa} alt="Imagem Mapa" />
            </div>
         </div>
         <div className="btns-next-previus">
            <button className="step-btn-voltar" onClick={setPreviusScreen}>&#8592; Voltar</button>
            <ButtonSuccess onClick={() => screen("payment")}>Seguinte</ButtonSuccess>
         </div>
      </>
   )
}