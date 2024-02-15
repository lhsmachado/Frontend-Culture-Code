import * as S from "../CardProductsRedeems/CardProductsRedeems.Styled";
import ButtonProps from "../Button/Button";
import ImgPhone from "../../assets/headset.png";
import ImgLeft from "../../assets/left-small.png";
import CardRedeemFor from "../CardRedeemFor/CardRedeemFor";
import CardMyBalance from "../CardMyBalance/CardMyBalance";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductsId } from "../../services/Products/getProducts/getProductsId";
import { getUser } from "../../services/getUser/getUser";

interface ICardProductsRedeems {
  onClick: () => void;
}

const CardProductsRedeems = ({ onClick }: ICardProductsRedeems) => {
  const { id } = useParams();

  const { data: products, isLoading } = useQuery({
    queryKey: ["getProductId"],
    queryFn: () => getProductsId(id as string),
  });

  const { data: user } = useQuery({
    queryKey: ["getUser"],
    queryFn: getUser,
  });
  
  return (
    <>
      {isLoading ? (
        <S.TitleLoading>carregando...</S.TitleLoading>
      ) : (
        <S.Container>
          <S.DivMyBalance>
            <CardMyBalance imagem={ImgLeft} balance={user?.credits} />
          </S.DivMyBalance>
          <S.DivImage>
            <S.Image src={ImgPhone} />
          </S.DivImage>
          <S.DivDescription>
            <div>
              <S.Title>{products?.name}</S.Title>
            </div>
            <S.DivCardRedeemFor>
              <CardRedeemFor price={products?.price} />
            </S.DivCardRedeemFor>
            <S.DivTextDescription>
              <S.TextDescription>{products?.description}</S.TextDescription>
            </S.DivTextDescription>

            <S.DivButton>
              <ButtonProps
                name="Resgatar"
                customWidth="100%"
                customHeight="62px"
                customColors="#ffff"
                customFontFamily="Sora"
                customFontWeight="700"
                customFontsize="1.5rem"
                customBorder="none"
                customBorderRadius="16px"
                customPadding=""
                customBackground=" #502B6B"
                customBackgroundHover="#60357e"
                onClick={onClick}
                isOpen={true}
              />
            </S.DivButton>
          </S.DivDescription>
        </S.Container>
      )}
    </>
  );
};

export default CardProductsRedeems;
