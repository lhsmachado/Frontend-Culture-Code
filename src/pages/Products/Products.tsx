import * as S from "../Products/Products.Styled";
import CardProductsRedeems from "../../components/CardProductsRedeems/CardProductsRedeems";
import Navigation from "../../components/Navigation/Navigation";

const Products = () => {
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

      <CardProductsRedeems />
    </>
  );
};

export default Products;
