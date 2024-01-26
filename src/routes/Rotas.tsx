import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
