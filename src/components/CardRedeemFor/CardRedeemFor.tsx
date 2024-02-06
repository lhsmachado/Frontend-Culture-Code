import * as S from "../CardRedeemFor/CardRedeemFor.Styled";
import ImgDiamont from "../../assets/diamondIcon.svg";
const CardRedeemFor = () => {
  return (
    <S.Container>
      <S.Text>
        Por: <S.Number>2</S.Number>
      </S.Text>
      <S.Imagem src={ImgDiamont} alt="imagem" />
    </S.Container>
  );
};

export default CardRedeemFor;
