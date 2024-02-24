import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./page/home";

const Rotas: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
