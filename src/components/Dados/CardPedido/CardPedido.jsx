import "./style.card-pedido.css";
import { useState } from "react";

const CardPedido = ({order}) => {

   const [visible, setVisible] = useState(false);

   const formatPrice = (price) => {
      return price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
   }

   const formatDate = (date) => {
      const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
      const fullyear = date.getFullYear();
      return `${day}/${month}/${fullyear}`;
   }

   return(
      <div className="card-pedido">
         <div className="pedido-title">
            <strong>Pedido: </strong>{order.id} - <strong>Data:</strong> {formatDate(new Date(order.date_request))}
         </div>
            <h2>Status do Pedido: <strong>{order.history_status_orders[order.history_status_orders.length - 1].status}</strong></h2>
            <div className="show-more-pedido" style={visible ? {display: "block"} : {display: "none"}}>
               <h3>Produtos:</h3>
               <ul>
                  {order.order_items.map((orderItem, index) => {
                     return(
                        <li key={index}>
                           <p>{orderItem.quantity}x {orderItem.product.name}</p>
                           <span>Preço: <strong>{formatPrice(orderItem.total_price_items)}</strong></span>
                           <span>Frete: <strong>{formatPrice(orderItem.total_price_freight)}</strong></span>
                        </li>
                     )
                  })}
               </ul>
               <h3>Endereço de Entrega: </h3>
               <p>{order.address.street}, {order.address.number} {order.address.complement ?? ""}, {order.address.district}, {order.address.city} - {order.address.state}</p>
               <h3>Histórico:</h3>
               <ul>
                  {order.history_status_orders.map((history, index) => {
                     return <li key={index}>{formatDate(new Date(history.date_status))} - {history.status} - {history.description}</li>
                  })}
               </ul>
            </div>
            <button onClick={() => setVisible(previusVisible => !previusVisible)}>{visible ? "Mostrar Menos" : "Mostrar Detalhes"}</button>
      </div>
   )
}

export default CardPedido;