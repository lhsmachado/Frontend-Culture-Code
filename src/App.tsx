import { GlobalStyle } from "./GlobalStyled";
import CardProduct from "./components/cardProduct/cardProduct";
import Rotas from "./routes/Rotas";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <CardProduct image={"src/assets/productMock.svg"} title={"bdfbdb"} gems={55} id={"id"} /> */}
      <Rotas />
    </>
  );
}

export default App;
