import * as S from "../Jewelry/Jewelry.Styled";

import ImgEsmeraldaAmarela from "../../assets/esmeraldaAmarelaTeste.png";
import ImgEsmeraldaRoxa from "../../assets/esmeralda-roxa.png";
import ImgEsmeraldaAzul from "../../assets/esmeralda-azul.png";
import ImgEsmeraldaVerde from "../../assets/esmeralda-verde.png";

const Jewelry = () => {
  return (
    <S.Container>
      <S.ImgJewelry src={ImgEsmeraldaAmarela} alt="" />
      <S.ImgJewelry src={ImgEsmeraldaRoxa} alt="" />
      <S.ImgJewelry src={ImgEsmeraldaAzul} alt="" />
      <S.ImgJewelry src={ImgEsmeraldaVerde} alt="" />
    </S.Container>
  );
};

export default Jewelry;
