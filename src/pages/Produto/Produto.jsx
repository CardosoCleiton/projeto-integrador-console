import { useEffect, useState } from "react";
import "./style.produto.css";
import Loading from "../../components/Ui/Loading/Loading";
import { FaMoneyBillWave } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { findProductById } from "../../api/enpoints/products/find-product-by-id";
import { listProductByCategory } from "../../api/enpoints/products/list-product-by-category";
import { apiConfig } from "../../config/variables"
import SliderCards from "../../components/Cards/SliderCards";
import { Card } from "../../components/Cards/Card";


const Produto = () => {

   const [produto, setProduto] = useState({});
   const [loading, setLoading] = useState(true);
   const [selectedImg, setSelectedImg] = useState("");
   const [relatedItems, setRelatedItems] = useState({});

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