import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categorias from "./components/Categorias/Categorias";
import Categorias2 from "./components/Categorias/Categorias2";
import Servicos from "./components/Servicos/Servicos";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Navbar />
        <Hero />
        <Categorias />
        <Categorias2 />
        <Servicos />
    </div>
  );
};

export default App;