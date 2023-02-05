import { useEffect } from "react";
import { BsCreditCardFill } from "react-icons/bs";
import { useMercadopago } from 'react-sdk-mercadopago';
import "./style.stepPayment.css";

const StepPayment = ({screen}) => {

   const mercadopago = useMercadopago.v2("TEST-03eeebaf-4da5-4110-8b41-7fba8455023a");

   useEffect(() => {
      if(mercadopago){
         const cardForm = mercadopago.cardForm({
            amount: "100.5",
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
              onSubmit: event => {
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
                 console.log(`Chegou AQUI. Screen ${screen}`);
                 screen("finish");
                 console.log(JSON.stringify(objRequest));
               //  fetch("http://localhost:3333/process_payment", {
               //    method: "POST",
               //    headers: {
               //      "Content-Type": "application/json",
               //    },
               //    body: JSON.stringify({
               //      token,
               //      issuer_id,
               //      payment_method_id,
               //      transaction_amount: Number(amount),
               //      installments: Number(installments),
               //      description: "Descrição do produto",
               //      payer: {
               //        email,
               //        identification: {
               //          type: identificationType,
               //          number: identificationNumber,
               //        },
               //      },
               //    }),
               //  });
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

   return(
      <>
         <div className="login-area">

            <div className="login-area-form revisao-pedido">
               <h1>Revisão do Pedido:</h1>
               <h2>Itens:</h2>
               <p>1x  Processador Amd Ryzen 7 5800x, 5° Geração.</p>
               <p>1x  Processador Amd Ryzen 7 5800x, 5° Geração.</p>
               <h2>Endereço de Entrega:</h2>
               <p>Avenida Paulista, 253 Casa A, Centro, São Paulo SP</p>
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