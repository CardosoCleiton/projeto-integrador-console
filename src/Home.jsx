import React from 'react'
import CardsProcessadores from './components/Cards/CardsProcessadores'
import Sliderhome from "./components/SliderHome/Sliderhome";
import CardsMonitores from "./components/Cards/CardsMonitores"

const Home = () => {
  return (
    <>
    <Sliderhome /> 
    <CardsProcessadores/>
    <CardsMonitores />
    </>
  )
}

export default Home