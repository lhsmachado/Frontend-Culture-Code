import * as S from "../CardPerfil/CardPerfil.Styled";
import ImgUser from "../../assets/imguser.png";

interface ICardPerfil {
  customColors: string;
  custonColorsStrong: string;
}

const CardPerfil = ({ customColors, custonColorsStrong }: ICardPerfil) => {
  return (
    <S.Container>
      <div>
        <S.ImgUser src={ImgUser} alt="" />
      </div>
      <div>
        <S.TitleNameUser customColors={customColors}>
          Olá,{" "}
          <S.TitleNameStrong customColors={custonColorsStrong}>
            Alex
          </S.TitleNameStrong>
        </S.TitleNameUser>
      </div>
    </S.Container>
  );
};

export default CardPerfil;
