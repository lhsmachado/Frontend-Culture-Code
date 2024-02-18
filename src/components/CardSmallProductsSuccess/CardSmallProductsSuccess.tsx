import * as S from "./CardSmallProductsSuccess.Styled";
import CardRedeemFor from "../CardRedeemFor/CardRedeemFor";
interface ICardSmallProductSuccess {
  imagem: string | undefined;
  titleProduct: string | undefined;
  priceProducts: number | undefined;
}

const CardSmallProductsSuccess = ({
  imagem,
  titleProduct,
  priceProducts,
}: ICardSmallProductSuccess) => {
  return (
    <S.Container>
      <S.DivImage>
        <S.Imagem src={imagem} alt="" />
      </S.DivImage>
      <S.DivText>
        <S.DivTitle>
          <S.Title>{titleProduct}</S.Title>
        </S.DivTitle>
        <S.CardRedeemFor>
          <CardRedeemFor price={priceProducts} />
        </S.CardRedeemFor>
      </S.DivText>
    </S.Container>
  );
};

export default CardSmallProductsSuccess;
