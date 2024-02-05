import * as S from "../Navigation/Navigation.Styled";
import CardPerfil from "../CardPerfil/CardPerfil";
import { useLocation } from "react-router-dom";

interface INavigation {
  home: string;
  produtos: string;
  myPerfil: string;
  customColorslinks: string;
}

const Navigation = ({
  home,
  produtos,
  myPerfil,
  customColorslinks,
}: INavigation) => {
  const location = useLocation();

  let customColors = "#ffff";
  if (location.pathname === "/produtos") {
    customColors = "#c5b2dc";
  }

  let customColorsStrong = "#ffff";
  if (location.pathname === "/produtos") {
    customColorsStrong = "#8638e5";
  }

  return (
    <S.Conatainer>
      <div>
        <CardPerfil
          customColors={customColors}
          custonColorsStrong={customColorsStrong}
        />
      </div>

      <S.DivLinksNavigation>
        <S.Links customColors={customColorslinks} to={"/home"}>
          {home}
        </S.Links>
        <S.Links customColors={customColorslinks} to={"/produtos"}>
          {produtos}
        </S.Links>
        <S.Links customColors={customColorslinks} to={"/home"}>
          {myPerfil}
        </S.Links>
      </S.DivLinksNavigation>
    </S.Conatainer>
  );
};

export default Navigation;
