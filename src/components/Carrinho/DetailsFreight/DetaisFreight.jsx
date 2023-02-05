import "./style.detailsFreight.css";
import { FaCheckCircle } from "react-icons/fa";


const DetailsFreight = (props) => {
   return(
      <>
         <input type="radio" id={props.id} name="frete" value={props.id} className="radio-freight"/>
         <label htmlFor={props.id} className="box-details-freight" onClick={() => props.setFrete(props.price)}>
            <div className="box-details-freight-icone"><FaCheckCircle /></div>
            <div className="box-details-freight-prazo">
               <h5>{props.tipofrete}</h5>
               <span>{`Prazo de entrega: até ${props.deadline} dias úteis`}</span>
            </div>
            <div className="box-details-freight-price">{props.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
         </label> 
      </>
   )
}

export default DetailsFreight;