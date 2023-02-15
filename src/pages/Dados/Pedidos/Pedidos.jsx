import { useState, useEffect } from "react";
import { BsFillBasket3Fill } from "react-icons/bs";
import MenuPerfil from "../../../components/Dados/MenuPerfil/MenuPerfil";
import CardPedido from "../../../components/Dados/CardPedido/CardPedido";
import "./style.pedidos.css"; 
import { listAllOrder } from "../../../api/enpoints/order/list-all-order";
import Loading from "../../../components/Ui/Loading/Loading";

const Pedidos = () => {

    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        (async () => {
            const orders = await listAllOrder(token);
            setOrders(orders);
            setLoading(false);
        })();
    }, []);

    return (
        
        <main className="page-dados-pessoais">
            <div className="page-dados-pessoais-menu">
                <MenuPerfil page="pedidos"/>
            </div>

            <div className="page-dados-pessais-form page-pedidos">
                <div className="login-title">
                    <h1><BsFillBasket3Fill className="login-title-icon"/> Pedidos</h1>
                </div> 

                {orders.length === 0 && <h2 className="page-sem-pedidos"> Você ainda não tem nenhum pedido</h2>}
            
                {loading && <Loading />}

                {(!loading && orders.length > 0) &&
                    <div className="box-pedidos">
                        {orders.map(order => {
                            return <CardPedido order={order} key={order.id}/>
                        })}          
                    </div>
                }
            </div>
        
        </main> 
    );
}

export default Pedidos;



