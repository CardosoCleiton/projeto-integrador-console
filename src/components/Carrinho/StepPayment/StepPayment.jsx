import { useEffect } from "react";
import { BsCreditCardFill } from "react-icons/bs";
import { useMercadopago } from 'react-sdk-mercadopago';
import { useContext } from "react";
import { CarrinhoContext } from "../../../contexts/Carrinho/CarrinhoContext";
import "./style.stepPayment.css";
import { useState } from "react";
import Loading from "../../Ui/Loading/Loading";
import { createOrder } from "../../../api/enpoints/order/create-order";
import { toast } from "react-toastify";

const StepPayment = ({screen, address, totalPrice, tipoFrete, selectTipoFrete}) => {

  const carrinhoProvider = useContext(CarrinhoContext);
  const [loading, setLoading] = useState(false);

  const orderItems = carrinhoProvider.carrinho.map((item => ({productId: item.id, quantity: item.quantity})));
  const freight = {
    addressId: address.id,
    freightType: selectTipoFrete.id
  }
  console.log(selectTipoFrete);
  const authToken = localStorage.getItem("authToken");
  const mercadopago = useMercadopago.v2("TEST-b72afe12-29f4-4f43-9e35-b5120d178389");

  useEffect(() => {
    if (mercadopago) {
      const cardForm = mercadopago.cardForm({
        amount: totalPrice.toString(),
        iframe: true,
        form: {
          id: "form-checkout",
          cardNumber: {
            id: "form-checkout__cardNumber",
            placeholder: "Número do cartão",
          },
          expirationDate: {
            id: "form-checkout__expirationDate",
            placeholder: "MM/YY",
          },
          securityCode: {
            id: "form-checkout__securityCode",
            placeholder: "Código de segurança",
          },
          cardholderName: {
            id: "form-checkout__cardholderName",
            placeholder: "Titular do cartão",
          },
          issuer: {
            id: "form-checkout__issuer",
            placeholder: "Banco emissor",
          },
          installments: {
            id: "form-checkout__installments",
            placeholder: "Parcelas",
          },
          identificationType: {
            id: "form-checkout__identificationType",
            placeholder: "Tipo de documento",
          },
          identificationNumber: {
            id: "form-checkout__identificationNumber",
            placeholder: "Número do documento",
          },
          cardholderEmail: {
            id: "form-checkout__cardholderEmail",
            placeholder: "E-mail",
          },
        },
        callbacks: {
          onFormMounted: error => {
            if (error) return console.warn("Form Mounted handling error: ", error);
            console.log("Form mounted");
          },
          onSubmit: async event => {
            event.preventDefault();

            const {
              paymentMethodId: payment_method_id,
              issuerId: issuer_id,
              cardholderEmail: email,
              amount,
              token,
              installments,
              identificationNumber,
              identificationType,
            } = cardForm.getCardFormData();

            const objRequest = {
              token,
              issuer_id,
              payment_method_id,
              transaction_amount: Number(amount),
              installments: Number(installments),
              description: "Descrição do produto",
              payer: {
                email,
                identification: {
                  type: identificationType,
                  number: identificationNumber,
                },
              }
            }
            
            setLoading(true);
            try{
              await createOrder(objRequest, {orderItems, freight}, authToken);
              setLoading(false);
              screen("finish");
            }catch(error){
              setLoading(false);
              toast.error(error.response.data.message, {
                position: "top-right",
                theme: "dark"
             });
            }
          },
          onFetching: (resource) => {
            console.log("Fetching resource: ", resource);

            // Animate progress bar
            const progressBar = document.querySelector(".progress-bar");
            progressBar.removeAttribute("value");

            return () => {
              progressBar.setAttribute("value", "0");
            };
          }
        },
      });
    }
  });

  if(loading){
    return <Loading center={true}/>
  }

   const formatTotal = totalPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
   
   return(
      <>
         <div className="login-area">

            <div className="login-area-form revisao-pedido">
               <h1>Revisão do Pedido:</h1>
               <h2>Itens:</h2>
               {carrinhoProvider.carrinho.map((item) => {
                return <p key={item.id}>{item.quantity}x {item.name}</p>
               })}
               <h2>Endereço de Entrega:</h2>
               <p>{address.street}, {address.number} {address.complement}, {address.city} {address.state}</p>
               <h2>TOTAL: <span>{formatTotal}</span></h2>
            </div>

            <div className="login-area-border"></div>

            <div className="login-area-form">
               <div className="title-payment-area">
                  <BsCreditCardFill className="icon-card"/>
                  <span>Preencha as informações com dados do títular do cartão:</span>
               </div>

               <div id="box-pagamento">
                  <form id="form-checkout">
                     <div id="form-checkout__cardNumber" className="container input-text-checkout"></div>
                     <div id="form-checkout__expirationDate" className="container input-text-checkout"></div>
                     <div id="form-checkout__securityCode" className="container input-text-checkout"></div>
                     <input type="text" id="form-checkout__cardholderName" className="input-text-checkout"/>
                     <select id="form-checkout__issuer" className="input-text-checkout"></select>
                     <select id="form-checkout__installments" className="input-text-checkout"></select>
                     <select id="form-checkout__identificationType" className="input-text-checkout"></select>
                     <input type="text" id="form-checkout__identificationNumber" className="input-text-checkout"/>
                     <input type="email" id="form-checkout__cardholderEmail" className="input-text-checkout"/>
               
                     <button type="submit" id="form-checkout__submit">Pagar</button>
                     <progress value="0" className="progress-bar">Carregando...</progress>
                  </form>
            </div>
            </div>
         </div>
         <div className="btns-next-previus">
            <button className="step-btn-voltar" onClick={() => screen("address")}>&#8592; Voltar</button>
         </div>
      </>
   )
}

export default StepPayment;