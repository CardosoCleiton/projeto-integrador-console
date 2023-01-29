import { useEffect } from "react";
import { useState } from "react";
import StepCarInfo from "../../components/Carrinho/StepCartInfo/StepCartInfo";
import "./style.carrinho.css";

const Carrinho = () => {

   const [screen, setScreen] = useState("cartInfo");

   useEffect(() => {
      setScreen("cartInfo");
   }, []);

   return (
      <main className="page-carrinho">
         <div className="stepStage">
            AREA DO STAGE
         </div>

         <div className="steps">
            {screen === "cartInfo" && <StepCarInfo />}
         </div>

      </main>
   )
} 

export default Carrinho;