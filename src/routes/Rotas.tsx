import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

import Products from "../pages/Products/Products";
import { SecurityToken } from "../provider/SecurityToken";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <SecurityToken>
              <Home />
            </SecurityToken>
          }
        />
        <Route
          path="/produtos"
          element={
            <SecurityToken>
              <Products />
            </SecurityToken>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
