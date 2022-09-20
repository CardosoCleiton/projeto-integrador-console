import React from "react";
import CardsMonitores from "./components/CardsMonitores";
import Header from './components/Header'
import HeaderMobile from './components/HeaderMobile'
import CardsProcessadoress from "./components/CardsProcessadores";
import Sliderhome from "./components/Sliderhome";


const App = () => {
  return (
    <>
      <HeaderMobile />
      <Header />
      <Sliderhome/>
      <CardsProcessadoress/>
      <CardsMonitores/>
    </>

  )
}

export default App;
