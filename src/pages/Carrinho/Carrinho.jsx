import { useState } from "react";
import { StepAddress } from "../../components/Carrinho/StepAddress/StepAddress";
import StepCarInfo from "../../components/Carrinho/StepCartInfo/StepCartInfo";
import StepLogin from "../../components/Carrinho/StepLogin/StepLogin";
import "./style.carrinho.css";

const Carrinho = () => {

   const [screen, setScreen] = useState("cartInfo");
   console.log(screen);
   return (
      <main className="page-carrinho">
         <div className="stepStage">
            AREA DO STAGE
         </div>

         <div className="steps">
            {screen === "cartInfo" && <StepCarInfo screen={setScreen}/>}
            {screen === "login" && <StepLogin screen={setScreen}/>}
            {screen === "address" && <StepAddress screen={setScreen} />}
         </div>

      </main>
   )
} 

export default Carrinho;