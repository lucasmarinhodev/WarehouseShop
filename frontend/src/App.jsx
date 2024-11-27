import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categorias from "./components/Categorias/Categorias";
import Categorias2 from "./components/Categorias/Categorias2";

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Categorias />
        <Categorias2 />
    </div>
  );
};

export default App;