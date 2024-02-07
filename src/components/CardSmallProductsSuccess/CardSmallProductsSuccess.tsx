import * as S from "./CardSmallProductsSuccess.Styled";
import CardRedeemFor from "../CardRedeemFor/CardRedeemFor";
interface ICardSmallProductSuccess {
  imagem: string;
  titleProduct: string;
}

const CardSmallProductsSuccess = ({
  imagem,
  titleProduct,
}: ICardSmallProductSuccess) => {
  return (
    <S.Container>
      <div>
        <S.Imagem src={imagem} alt="" />
      </div>
      <div>
        <S.DivTitle>
          <S.Title>{titleProduct}</S.Title>
        </S.DivTitle>
        <div>
          <CardRedeemFor />
        </div>
      </div>
    </S.Container>
  );
};

export default CardSmallProductsSuccess;
