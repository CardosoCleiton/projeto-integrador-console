import axios from "axios";
import { useEffect, useState } from "react";
// import "./style.produto.css";
import Loading from "../../components/Loading/Loading";

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
                  <h1>Informações</h1>
               </div>

            </div>


            <div className="descricao">
               <h1>Descricao</h1>
            </div>

         </div>
      </main>
   )
}

export default Produto;