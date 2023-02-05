import { useState } from "react";
import { StepAddress } from "../../components/Carrinho/StepAddress/StepAddress";
import StepCarInfo from "../../components/Carrinho/StepCartInfo/StepCartInfo";
import StepLogin from "../../components/Carrinho/StepLogin/StepLogin";
import StepPayment from "../../components/Carrinho/StepPayment/StepPayment";
import StepArea from "../../components/Carrinho/StepArea/StepArea";
import "./style.carrinho.css";
import StepFinish from "../../components/Carrinho/StepFinish/StepFinish";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useEffect } from "react";

const Carrinho = () => {

   const auth = useContext(AuthContext);

   const [screen, setScreen] = useState("cartInfo");
   
   useEffect(() => {
      if(auth.user && screen === "login"){
         setScreen("address");
      }
   }, [screen, auth]);


   return (
      <main className="page-carrinho">
         <div className="stepStage">
            <StepArea stageScreen={screen}/>
         </div>

         <div className="steps">
            {screen === "cartInfo" && <StepCarInfo screen={setScreen} key="cartInfo"/>}
            {screen === "login" && <StepLogin screen={setScreen}/>} 
            {screen === "address" && <StepAddress screen={setScreen} />}
            {screen === "payment" && <StepPayment screen={setScreen}/>}
            {screen === "finish" && <StepFinish screen={setScreen}/>}
         </div>             

      </main>
   )
} 

export default Carrinho;