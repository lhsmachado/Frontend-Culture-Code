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
      <div>
        <S.Imagem src={imagem} alt="" />
      </div>
      <div>
        <S.DivTitle>
          <S.Title>{titleProduct}</S.Title>
        </S.DivTitle>
        <div>
          <CardRedeemFor price={priceProducts} />
        </div>
      </div>
    </S.Container>
  );
};

export default CardSmallProductsSuccess;
