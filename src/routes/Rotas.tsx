import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

import Products from "../pages/Products/Products";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
