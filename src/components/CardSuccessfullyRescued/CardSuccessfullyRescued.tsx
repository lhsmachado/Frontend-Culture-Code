import ButtonProps from "../Button/Button";
import CardMyBalance from "../CardMyBalance/CardMyBalance";

import ImgPersonagem from "../../assets/Group8.png";
import ImgPhone from "../../assets/headset.png";
import * as S from "./CardSuccessfullyRescued.Styled";
import CardSmallProductsSuccess from "../CardSmallProductsSuccess/CardSmallProductsSuccess";

const CardSuccessfullyRescued = () => {
  const handleFake = () => {
    console.log("estou esperando funcionar");
  };
  return (
    <S.Container>
      <S.DivImage>
        <S.Image src={ImgPersonagem} />
      </S.DivImage>
      <S.DivDescription>
        <S.DivTitleProduct>
          <S.Title>Produto resgatado com sucesso!</S.Title>
        </S.DivTitleProduct>

        <S.DivCardSmallProductsSuccess>
          <CardSmallProductsSuccess
            imagem={ImgPhone}
            titleProduct="Headphone W820BT Bluetooth over-ear edifier"
          />
        </S.DivCardSmallProductsSuccess>

        <S.DivTextDescription>
          <S.TextDescription>
            Aqui irá um texto explicando como o produto será retirado.
          </S.TextDescription>
        </S.DivTextDescription>

        <S.DivMyBalance>
          <CardMyBalance />
        </S.DivMyBalance>

        <S.DivButton>
          <ButtonProps
            name="Voltar à página inicial"
            customWidth="100%"
            customHeight="62px"
            customColors="#60357e"
            customFontFamily="Sora"
            customFontWeight="700"
            customFontsize="1.5rem"
            customBorderRadius="16px"
            customPadding=""
            customBackground=" #ffff"
            customBackgroundHover="#60357e"
            onClick={handleFake}
            isOpen={true}
          />
        </S.DivButton>
      </S.DivDescription>
    </S.Container>
  );
};

export default CardSuccessfullyRescued;
