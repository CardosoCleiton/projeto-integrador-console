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
import { CarrinhoContext } from "../../contexts/Carrinho/CarrinhoContext";
import { useEffect } from "react";
import { calcularFrete } from "../../api/enpoints/frete/calcular-frete";
import { toast } from "react-toastify";

const Carrinho = () => {

   const auth = useContext(AuthContext);
   const carrinhoProvider = useContext(CarrinhoContext);

   const [screen, setScreen] = useState("cartInfo");
   const [subTotal, setSubTotal] = useState(0.0);
   const [total, setTotal] = useState(0.0);
   const [frete, setFrete] = useState(0.0);
   const [address, setAddress] = useState(null);
   const [tiposFrete, setTiposFrete] = useState([]);
   const [selectTipoFrete, setSelectTipoFrete] = useState({});
   const [cep, setCep] = useState("");
   const [loadingFrete, setLoadingFrete] = useState(false);
   
   useEffect(() => {
      if(auth.user && screen === "login"){
         setScreen("address");
      }
      //Calculo subtotal
      const priceSubTotal = carrinhoProvider.carrinho.reduce((accumulator, currentValue) => {
         return accumulator + currentValue.totalPrice
      }, 0);
      setSubTotal(priceSubTotal);

      //Calculo total:
      const priceTotal = priceSubTotal + frete;
      setTotal(priceTotal);
   }, [screen, auth, subTotal, carrinhoProvider, frete, selectTipoFrete]);


   const calcularPrecoFrete = async (cep) => {
      setLoadingFrete(true);
      setTiposFrete([]);
      try{
         const fretePrice = await calcularFrete({
            items: carrinhoProvider.carrinho,
            cep
         });
         setTiposFrete(fretePrice);
         setLoadingFrete(false);
      }catch(error){
         toast.error("CEP Inválido", {
            position: "top-right",
            theme: "dark"
         });
         setLoadingFrete(false);
         return;
      }
   }


   return (
      <main className="page-carrinho">
         <div className="stepStage">
            <StepArea stageScreen={screen}/>
         </div>

         <div className="steps">
            {screen === "cartInfo" && <StepCarInfo 
                                          screen={setScreen}
                                          carrinho={carrinhoProvider.carrinho}
                                          subTotal={subTotal}
                                          alterSubTotal={setSubTotal}
                                          frete={frete}
                                          total={total}
                                          calcularFrete={calcularPrecoFrete}
                                          tiposFrete={tiposFrete}
                                          cep={cep}
                                          setCep={setCep}
                                          setFrete={setFrete}
                                          loadingFrete={loadingFrete}
                                          calcularPrecoFrete={calcularPrecoFrete}
                                       />
            }
            {screen === "login" && <StepLogin screen={setScreen}/>} 
            {screen === "address" && <StepAddress
                                          screen={setScreen}
                                          calcularPrecoFrete={calcularPrecoFrete}
                                          setCep={setCep}
                                          tiposFrete={tiposFrete}
                                          setTiposFrete={setTiposFrete}
                                          setFrete={setFrete}
                                          loadingFrete={loadingFrete}
                                          setLoadingFrete={setLoadingFrete}
                                          setAddress={setAddress}
                                          address={address}
                                          setSelectTipoFrete={setSelectTipoFrete}
                                       />}
            {screen === "payment" && <StepPayment
                                       screen={setScreen}
                                       address={address}
                                       totalPrice={total}
                                       tipoFrete={tiposFrete}
                                       selectTipoFrete={selectTipoFrete}
                                    />}
            {screen === "finish" && <StepFinish screen={setScreen}/>}
         </div>             

      </main>
   )
} 

export default Carrinho;