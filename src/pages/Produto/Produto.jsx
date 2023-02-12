import { useEffect, useState } from "react";
import "./style.produto.css";
import Loading from "../../components/Ui/Loading/Loading";
import { FaMoneyBillWave } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { useParams, useNavigate } from "react-router-dom";
import { findProductById } from "../../api/enpoints/products/find-product-by-id";
import { listProductByCategory } from "../../api/enpoints/products/list-product-by-category";
import { apiConfig } from "../../config/variables"
import SliderCards from "../../components/Cards/SliderCards";
import { Card } from "../../components/Cards/Card";
import DetailsFreight from "../../components/Carrinho/DetailsFreight/DetaisFreight";
import { calcularFrete } from "../../api/enpoints/frete/calcular-frete";
import { toast } from "react-toastify";
import { useContext } from "react";
import { CarrinhoContext } from "../../contexts/Carrinho/CarrinhoContext";


const Produto = () => {

   const carrinhoProvider = useContext(CarrinhoContext);
   const navigate = useNavigate();

   const [produto, setProduto] = useState({});
   const [loading, setLoading] = useState(true);
   const [selectedImg, setSelectedImg] = useState("");
   const [relatedItems, setRelatedItems] = useState({});

   //FRETE
   const [cep, setCep] = useState("");
   const [tiposFrete, setTiposFrete] = useState([]);
   const [loadingFrete, setLoadingFrete] = useState(false);
   const { id } = useParams();

   useEffect(() => {
      async function loadingApi(){
         const data = await findProductById(id);
         const relationalItems = await listProductByCategory(data.category.slug, 8);
         window.scrollTo(0, 0);
         setRelatedItems(relationalItems.rows);
         setProduto(data);
         setSelectedImg(`${apiConfig.imagesBaseUrl}/${data.image_products[0].name}`)
         setLoading(false)
      }
     loadingApi();
   }, [setProduto, setLoading, setSelectedImg, id]); // eslint-disable-line


   const calcularPrecoFrete = async (cep) => {
      setLoadingFrete(true);
      setTiposFrete([]);
      try{
         const fretePrice = await calcularFrete({
            items: [produto],
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

   const validateInputCep = (event) => {
      let value = event.target.value;
      if(value.includes(".")){
         value = value.replace(".", "");
      }
      if(value.length > 8){
         return;
      }
      if(!isNaN(value)){
         setCep(value);
      }
      return;
   }

   const efetuarCompra = () => {
      carrinhoProvider.addItem({
         name: produto.name,
         description: produto.description,
         unitPrice: produto.price,
         image: `${apiConfig.imagesBaseUrl}/${produto.image_products[0].name}`,
         id: produto.id,
         quantity: 1,
         totalPrice: produto.price
      });
      return navigate("/carrinho");
   }


   if(loading){
      return(
         <Loading margin={true} center={true}/>
      )
   }

   return(
      <main className="page-produto">
         <div className="container-produto">

            <div className="caracteristicas">
               
               <div className="galeria">
                  <div className="menu-imagens">
                     {produto.image_products.map((img, index) => {
                        let imgUrl = `${apiConfig.imagesBaseUrl}/${img.name}`;
                        return(
                           <img
                              src={imgUrl}
                              alt=""
                              key={index}
                              onClick={() => setSelectedImg(imgUrl)}
                              style={{border : imgUrl === selectedImg ? "3px solid #5C7DF2": ""}}
                           />
                        )
                     })}
                  </div>
                  <div className="imagem-principal">
                     <img src={selectedImg} alt="" />
                  </div>
               </div>

               <div className="informacoes">
                  <h1>{produto.name}</h1>
                  <span className="disponibilidade">Produto {produto.stock ? "Disponível" : "Indisponível"}</span>

                  <div className="preco">
                     <FaMoneyBillWave />
                     <span className="valor-preco">{produto.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                     <span className="parcelamento">Em até 12x com juros</span>
                  </div>

                  <button className="btn-comprar" onClick={efetuarCompra}>
                     <HiShoppingCart />
                     COMPRAR
                  </button>

                  <div className="frete">
                     <label htmlFor="frete">Consultar frete e prazo de entrega</label>
                     <div>
                        <input type="text" name="frete" id="frete" placeholder="Inserir CEP" onChange={validateInputCep} value={cep}/>
                        <button onClick={() => calcularPrecoFrete(cep)}>OK</button>
                     </div>
                     <div className="produto-area-frete">
                        {loadingFrete && <div><Loading center={true}/></div>}
                        {tiposFrete.map((frete, index) => {
                           return(
                              <div key={index}><DetailsFreight tipofrete={frete.type} deadline={frete.deadline} price={frete.price} id={frete.typeId} /></div>
                           )
                        })}
                     </div>
                  </div>
               </div>

            </div>


            <div className="descricao">
               <h1 className="title-style">Descrição do produto</h1>
               <p>{produto.description}</p>
            </div>

         </div>

         <SliderCards category="Itens relacionados" link={produto.category.slug}>
            {relatedItems.map((relacional) => {
               return (
                  <Card
                  image={relacional.image_products[0].name}
                  name={relacional.name}
                  description={relacional.description}
                  price={relacional.price}
                  id={relacional.id}
                  key={relacional.id}
                  />
               )
            })}
         </SliderCards>
      </main>
   )
}

export default Produto;