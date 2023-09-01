import React from 'react';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Blog from './components/blog'; 
import Inicio from './page/home';


const Rotas: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/blog" element={<Blog/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default Rotas;