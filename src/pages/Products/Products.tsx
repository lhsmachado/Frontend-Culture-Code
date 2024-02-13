import * as S from "../Products/Products.Styled";
import CardProductsRedeems from "../../components/CardProductsRedeems/CardProductsRedeems";
import Navigation from "../../components/Navigation/Navigation";
import CardSuccessfullyRescued from "../../components/CardSuccessfullyRescued/CardSuccessfullyRescued";
import { useState } from "react";

const Products = () => {
  const [cards, setCards] = useState("");

  const cardRestadado = () => setCards("rescued");

  return (
    <>
      <S.DivNavigate>
        <Navigation
          customColorslinks="#000000"
          home="Home"
          produtos="Produtos"
          myPerfil="Meu Perfil"
        />
      </S.DivNavigate>

      {cards === "rescued" ? (
        <S.DivAnimate
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CardSuccessfullyRescued />
        </S.DivAnimate>
      ) : (
        <CardProductsRedeems onClick={cardRestadado} />
      )}
    </>
  );
};

export default Products;
