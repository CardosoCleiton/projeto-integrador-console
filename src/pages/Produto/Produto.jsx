import axios from "axios";
import { useEffect, useState } from "react";
import "./style.produto.css";
import Loading from "../../components/Ui/Loading/Loading";
import { FaMoneyBillWave } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";


const Produto = () => {

   const [produto, setProduto] = useState({});
   const [loading, setLoading] = useState(true);
   const [selectedImg, setSelectedImg] = useState("");

   useEffect(() => {
     async function loadingApi(){
      const { data } = await axios.get("/api-fake.json")
      setProduto(data);
      setSelectedImg(data.imagens[0])
      setLoading(false)
     }
     loadingApi();
   }, [setProduto, setLoading, setSelectedImg]);


   if(loading){
      return(
         <Loading />
      )
   }

   return(
      <main className="page-produto">
         <div className="container-produto">

            <div className="caracteristicas">
               
               <div className="galeria">
                  <div className="menu-imagens">
                     {produto.imagens.map((img, index) => {
                        return(
                           <img
                              src={img}
                              alt=""
                              key={index}
                              onClick={() => setSelectedImg(img)}
                              style={{border : img === selectedImg ? "3px solid #5C7DF2": ""}}
                           />
                        )
                     })}
                  </div>
                  <div className="imagem-principal">
                     <img src={selectedImg} alt="" />
                  </div>
               </div>

               <div className="informacoes">
                  <h1>{produto.nome}</h1>
                  <span className="disponibilidade">Produto {produto.status}</span>

                  <div className="preco">
                     <FaMoneyBillWave />
                     <span className="valor-preco">R$ {produto.preco}</span>
                     <span className="parcelamento">Em até 12x sem juros</span>
                  </div>

                  <button className="btn-comprar">
                     <HiShoppingCart />
                     COMPRAR
                  </button>

                  <div className="frete">
                     <label htmlFor="frete">Consultar frete e prazo de entrega</label>
                     <div>
                        <input type="text" name="frete" id="frete" placeholder="Inserir CEP" />
                        <button>OK</button>
                     </div>
                  </div>
               </div>

            </div>


            <div className="descricao">
               <h1 className="title-style">Descrição do produto</h1>
               <p>{produto.descricao}</p>
            </div>

         </div>
      </main>
   )
}

export default Produto;