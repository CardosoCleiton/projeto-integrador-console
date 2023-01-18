import React from 'react'
import Sliderhome from "../../components/SliderHome/Sliderhome";
import SliderCards from "../../components/Cards/SliderCards";
import { Card } from '../../components/Cards/Card';

const Home = () => {
  return (
    <>
    <Sliderhome /> 
    <main>
      <SliderCards category="Monitores" link="/monitores">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SliderCards>

      <SliderCards category="Processadores" link="/processadores">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SliderCards>
    </main>
    </>
  )
}

export default Home