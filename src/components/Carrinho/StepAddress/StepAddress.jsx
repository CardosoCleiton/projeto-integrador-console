import "./style.stepAddress.css";
import imageMapa from "../../../images/mapa.svg";
import DetailsFreight from "../DetailsFreight/DetaisFreight"
import ButtonSuccess from "../../Ui/ButtonSuccess/ButtonSuccess";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext"
import { Link } from "react-router-dom";
import { listAllAddress } from "../../../api/enpoints/address/list-all-address";
import { toast } from "react-toastify";
import { useState } from "react";
import Loading from "../../Ui/Loading/Loading";

export const StepAddress = ({screen, setCep, calcularPrecoFrete, tiposFrete, setFrete, loadingFrete, setTiposFrete, setAddress, address, setSelectTipoFrete}) => {

   const auth = useContext(AuthContext);

   const [allAddress, setAllAddress] = useState([]);
   const [loadingAddress, setLoadingAddress] = useState(false);

   useEffect(() => {
      setTiposFrete([]);
      setLoadingAddress(true);
      const apiGetAllAddress = async () => {
         const token = localStorage.getItem("authToken");
         try{
            const allAddress = await listAllAddress(token);
            setCep(allAddress[0].cep);
            setAllAddress(allAddress);
         }catch(error){
            toast.error("Login Obrigatório", {
               position: "top-right",
               theme: "dark"
            });
         }
      }
      apiGetAllAddress();
      setLoadingAddress(false);
   }, [loadingAddress, setCep, setTiposFrete]);

   const setPreviusScreen = () => {
      if(auth.user){
         screen("cartInfo");
      }else{
         screen("login");
      }
   }

   const selectAddress = (address) => {
      setAddress(address);
      setCep(address.cep);
      calcularPrecoFrete(address.cep);
   }

   if(loadingAddress){
      return <Loading center={true}/>
   }

   const nextPage = () => {
      console.log(address);
      if(address){
         screen("payment")
      }else{
         toast.error("Selecione o endereço de entrega", {
            position: "top-right",
            theme: "dark"
         });
      }
   }
   
   return(
      <>
         <div className="login-area">
            <div className="login-area-form">
               <h1>Selecione um de seus endereços cadastrados para entrega do pedido:</h1>

               {allAddress.map((address, index) => {
                  return(
                     <div className="address-input" key={address.id}>
                        <input type="radio" id={address.id} name="address-pedido" className="radio-address" onClick={() => selectAddress(address)} />
                        <label htmlFor={address.id} className="step-label-address">
                           {`${address.street}, ${address.number} ${address.complement ? address.complement : ""}, ${address.district}, ${address.city} ${address.state}`}
                        </label>
                     </div>
                  )
               })}
               
               <Link to="#" className="atualizar-endereco">Atualizar Endereço</Link>

               <div className="opcoes-frete">
                  {loadingFrete && <Loading />}
                  {tiposFrete.map((frete, index) => {
                     return <DetailsFreight tipofrete={frete.type} deadline={frete.deadline} price={frete.price} key={index} id={frete.typeId} setFrete={setFrete} tipoFrete={setSelectTipoFrete}/>
                  })}
               </div>

            </div>
            <div className="login-area-border"></div>

            <div className="login-area-image">
               <img src={imageMapa} alt="Imagem Mapa" />
            </div>
         </div>
         <div className="btns-next-previus">
            <button className="step-btn-voltar" onClick={setPreviusScreen}>&#8592; Voltar</button>
            <ButtonSuccess onClick={nextPage}>Seguinte</ButtonSuccess>
         </div>
      </>
   )
}