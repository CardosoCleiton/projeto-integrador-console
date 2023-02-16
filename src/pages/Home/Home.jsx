import React from 'react'
import Sliderhome from "../../components/SliderHome/Sliderhome";
import SliderCards from "../../components/Cards/SliderCards";
import { Card } from '../../components/Cards/Card';
import { useEffect } from 'react';
import { listProductByCategory } from "../../api/enpoints/products/list-product-by-category";
import { listAllCategory } from "../../api/enpoints/categories/list-all-category";
import Loading from '../../components/Ui/Loading/Loading';
import { useState } from "react";

const Home = () => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState({});
  const [productsSlide, setProductsSlide] = useState([]);

  useEffect(() => {
    (async () => {
      const allCategories = await listAllCategory();
      
      let productsByCategory = []

      for(let category of allCategories){
        const categoryProducts = await listProductByCategory(category.slug, 8);

        if(categoryProducts.rows.length > 1){
          productsByCategory.push({
            name: category.name,
            plural_name: category.plural_name,
            slug: category.slug,
            rows: categoryProducts.rows
          })
        }
      }

      const productsSlider = productsByCategory
                              .map(product => product.rows)
                              .map(products => products[0]);
      setProductsSlide(productsSlider);

      setProducts(productsByCategory);
      setLoading(false);
    })();
  }, []) // eslint-disable-line

  if(loading){
    return <Loading margin={true} center={true}/>
  }

  return (
    <>
    <Sliderhome products={productsSlide}/> 
    <main>
      {
        products.map((productByCategory, index) => {
          return (
            <SliderCards category={productByCategory.plural_name} link={productByCategory.slug} key={index}>
              {productByCategory.rows.map((productItem) => {
                return (
                  <Card 
                    image={productItem.image_products[0].name}
                    name={productItem.name}
                    description={productItem.description}
                    price={productItem.price}
                    id={productItem.id}
                    key={productItem.id}
                  />
                )
              })}
            </SliderCards>
          )
        })
      }
    </main>
    </>
  )
}

export default Home