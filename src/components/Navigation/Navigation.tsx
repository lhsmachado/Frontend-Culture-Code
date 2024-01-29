import * as S from "../Navigation/Navigation.Styled";
import CardPerfil from "../CardPerfil/CardPerfil";

const Navigation = () => {
  return (
    <S.Conatainer>
      <div>
        <CardPerfil />
      </div>

      <S.DivLinksNavigation>
        <S.Links to={"home"}>Home</S.Links>
        <S.Links to={"home"}>Produtos</S.Links>
        <S.Links to={"home"}>Meu perfil</S.Links>
      </S.DivLinksNavigation>
    </S.Conatainer>
  );
};

export default Navigation;
