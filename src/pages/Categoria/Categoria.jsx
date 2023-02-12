import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { listProductByCategory } from "../../api/enpoints/products/list-product-by-category";
import Loading from "../../components/Ui/Loading/Loading";
import { Card } from "../../components/Cards/Card";
import "./style.categoria.css";

export const Categoria = () => {

   const { categoria } = useParams();
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [next, setNext] = useState(false);

   useEffect(() => {
      (async () => {
         const allProducts = await listProductByCategory(categoria, 8, page);
         setNext(allProducts.next);
         setProducts(previusProducts => {
            if(page === 1){
               return allProducts.rows;
            }else{
               return [...previusProducts, ...allProducts.rows]
            }
         });
         setLoading(false);
      })()
   }, [page, categoria]); //eslint-disable-line
   
   if(loading){
      return <Loading center={true} margin={true}/>
   }

   const showMore = () => {
      setPage(previusPage => {
         return previusPage + 1;
      });
   }

   return(
      <div className="category">
         <h1 className="title-category">{products[0].category.plural_name}</h1>
         <section className='categoria'>
            {products.map(product => {
               return <Card name={product.name} description={product.description} price={product.price} image={product.image_products[0].name} id={product.id} key={product.id}/>
            })}
         </section>
         {next && <button className="ver-mais" onClick={showMore}>Mostrar mais</button>}
      </div>
   )
}