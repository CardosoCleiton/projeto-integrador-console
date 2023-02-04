import "./style.detailsFreight.css";
import { FaCheckCircle } from "react-icons/fa";


const DetailsFreight = (props) => {
   return(
      <>
         <input type="radio" {...props} />
         <label htmlFor={props.id} className="box-details-freight">
            <div className="box-details-freight-icone"><FaCheckCircle /></div>
            <div className="box-details-freight-prazo">
               <h5>Transportadora: Correios</h5>
               <span>Prazo de entrega: até 13 dias úteis</span>
            </div>
            <div className="box-details-freight-price">R$ 28,90</div>
         </label>
      </>
   )
}

export default DetailsFreight;