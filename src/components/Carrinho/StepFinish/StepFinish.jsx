import { useState } from "react";
import { Link } from "react-router-dom";
import imageCelebration from "../../../images/uhu.svg";
import Loading from "../../Ui/Loading/Loading"
import "./style.stepFinish.css";
import { listAllOrder } from "../../../api/enpoints/order/list-all-order";

const StepFinish = () => {

   const [loading, setLoading] = useState(true);
   const [order, setOrder] = useState({});

   useState(() => {
      const token = localStorage.getItem("authToken");
      (async () => {
         const orders = await listAllOrder(token);
         setOrder(orders[0]);
         setLoading(false);
      })();
   })

   if(loading){
      return <Loading center={true}/>
   }

   return(
      <div className="login-area">

            <div className="login-area-form step-finish">
               <h1>Uhuu! Você acaba de finalizar seu pedido.</h1>
               <h3>N° do pedido: <span>{order.id}</span></h3>
               <p>Status: <span>{order.history_status_orders[0].description}</span></p>
               <p>Confira os detalhes em: <Link to="/dados/pedidos">meus pedidos</Link></p>
            </div>

            <div className="login-area-border"></div>

            <div className="login-area-image">
               <img src={imageCelebration} alt="Imagem de comemoração" />
            </div>
         </div>
   )
}

export default StepFinish;