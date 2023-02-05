import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdPayments } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import "./style.stepArea.css";


const StepArea = ({stageScreen}) => {

   let nivel;
   switch(stageScreen){
      case "login":
         nivel = 2
      break;
      case "address":
         nivel = 3;
      break;
      case "payment":
         nivel = 4;
      break;
      case "finish":
         nivel = 5;
      break;
      default: 
         nivel = 1;
   }
   console.log(`Step: ${stageScreen} - Nível: ${nivel}`);

   return(
      <div className="step-area">

         <div className="step-icon step-icon-active">
            <FaShoppingCart />
         </div>

         <div className="line"></div>

         <div className={`step-icon ${nivel >= 2 ? "step-icon-active" : ""}`}>
            <FaUserAlt />
         </div>

         <div className="line"></div>

         <div className={`step-icon ${nivel >= 3 ? "step-icon-active" : ""}`}>
            <HiLocationMarker />
         </div>

         <div className="line"></div>

         <div className={`step-icon ${nivel >= 4 ? "step-icon-active" : ""}`}>
            <MdPayments />
         </div>

         <div className="line"></div>

         <div className={`step-icon ${nivel >= 5 ? "step-icon-active" : ""}`}>
            <BsCartCheckFill />
         </div>
      </div>
   )
}

export default StepArea;