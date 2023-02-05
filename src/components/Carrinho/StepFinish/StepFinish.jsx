import { Link } from "react-router-dom";
import imageCelebration from "../../../images/uhu.svg";
import "./style.stepFinish.css";

const StepFinish = () => {
   return(
      <div className="login-area">

            <div className="login-area-form step-finish">
               <h1>Uhuu! Você acaba de finalizar seu pedido.</h1>
               <h3>N° do pedido: <span>156456</span></h3>
               <p>Status: <span>Seu Pagamento foi aprovado, agora nossa equipe está preparando seu pedido para envio.</span></p>
               <p>Confira os detalhes em: <Link to="#">meus pedidos</Link></p>
            </div>

            <div className="login-area-border"></div>

            <div className="login-area-image">
               <img src={imageCelebration} alt="Imagem de comemoração" />
            </div>
         </div>
   )
}

export default StepFinish;