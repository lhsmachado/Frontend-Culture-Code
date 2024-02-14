import * as S from "../CardRedeemFor/CardRedeemFor.Styled";
import ImgDiamont from "../../assets/diamondIcon.svg";

interface ICardRedeemFor {
  price: number | undefined;
}

const CardRedeemFor = ({ price }: ICardRedeemFor) => {
  return (
    <S.Container>
      <S.Text>
        Por: <S.Number>{price}</S.Number>
      </S.Text>
      <S.Imagem src={ImgDiamont} alt="imagem" />
    </S.Container>
  );
};

export default CardRedeemFor;
