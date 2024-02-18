import { useEffect, useState } from "react";
import { GlobalStyle } from "./GlobalStyled";
import { TokenContext } from "./context/userContext";
import Rotas from "./routes/Rotas";

function App() {
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    const storage = localStorage.getItem("access_token");
    setToken(storage);
  }, []);
  return (
    <>
      <GlobalStyle />
      <TokenContext.Provider value={{ token }}>
        <Rotas />
      </TokenContext.Provider>
    </>
  );
}

export default App;
