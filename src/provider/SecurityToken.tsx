import { ReactNode, useContext, useEffect, useState } from "react";
import { TokenContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

interface ISecurityToken {
  children: ReactNode;
}

export const SecurityToken = ({ children }: ISecurityToken) => {
  const { token } = useContext(TokenContext);
  const [athentic, setAthentic] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (storedToken || token) {
      setAthentic(true);
    } else {
      navigate("/");
      alert("Por favor realize o login novamente");
    }
  }, [token, navigate]);

  return athentic ? children : null;
};
