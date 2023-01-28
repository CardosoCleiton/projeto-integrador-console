import React from 'react'
import Sliderhome from "../../components/SliderHome/Sliderhome";
import SliderCards from "../../components/Cards/SliderCards";
import { Card } from '../../components/Cards/Card';
import { useEffect } from 'react';
import { listProductByCategory } from "../../api/enpoints/products/list-product-by-category";
import Loading from '../../components/Ui/Loading/Loading';
import { useState } from "react";

const Home = () => {

  const [loading, setLoading] = useState(true);
  const [monitors, setMonitors] = useState([]);
  const [processors, setProcessors] = useState([]);

  useEffect(() => {
    (async () => {
      const monitors = await listProductByCategory("monitor", 8);
      const processors = await listProductByCategory("processador", 8);
      setMonitors(monitors.rows);
      setProcessors(processors.rows);
      setLoading(false);
    })();
  }, []) // eslint-disable-line

  if(loading){
    return <Loading />
  }

  return (
    <>
    <Sliderhome /> 
    <main>
      <SliderCards category="Monitor" link="monitor">
        {monitors.map((monitor) => {
          return (
            <Card
              image={monitor.image_products[0].name}
              name={monitor.name}
              description={monitor.description}
              price={monitor.price}
              id={monitor.id}
              key={monitor.id}
            />
          )
        })}
      </SliderCards>

      <SliderCards category="Processador" link="processador">
        {processors.map((processor) => {
          return (
            <Card
              image={processor.image_products[0].name}
              name={processor.name}
              description={processor.description}
              price={processor.price}
              id={processor.id}
              key={processor.id}
            />
          )
        })}
      </SliderCards>
    </main>
    </>
  )
}

export default Home