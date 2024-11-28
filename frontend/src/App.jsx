import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categorias from "./components/Categorias/Categorias";
import Categorias2 from "./components/Categorias/Categorias2";
import Servicos from "./components/Servicos/Servicos";
import Banner from "./components/Banner/Banner";

import FaHeadphones from "./assets/category/fonejbl.png";

const BannerData = {
  discount: "30% OFF",
  title: "Melhor Qualidade",
  date:"10 Nov a 28 Nov",
  image: FaHeadphones,
  title2: "JBL AirSolo Bass",
  title3: "Promoção Black Friday",
  title4: "Fones de ouvido sem fio com graves potentes, som nítido e até 20 horas de autonomia, oferecendo conforto e qualidade sonora para o seu dia a dia.",
  bgColor: "#f42c37",
};

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Navbar />
        <Hero />
        <Categorias />
        <Categorias2 />
        <Servicos />
        <Banner data={BannerData}/>
    </div>
  );
};

export default App;