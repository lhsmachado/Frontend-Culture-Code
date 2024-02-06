import ButtonProps from "../Button/Button";

import * as S from "./CardProduct.Styled";

import Imgheart from "../../assets/heart-line.svg";

interface ICardProductType {
  image: string;
  title: string;
  gems: number;
}

const CardProduct = ({ image, title, gems }: ICardProductType) => {
  function handleClick() {
    return console.log("resgatou");
  }
  return (
    <S.Container>
      <S.DivImg>
        <S.Image src={image} />
      </S.DivImg>
      <S.DivTitleButton>
        <S.DivTitle>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{gems} jóias</S.SubTitle>
        </S.DivTitle>
        <S.DivButtonProps>
          <ButtonProps
            name="Resgatar"
            customColors="#FFFFFF "
            customBackground="#502B6B"
            customFontWeight="600"
            customFontsize="1.2rem"
            customFontFamily="Sora"
            customHeight="3rem"
            customBorderRadius="5px"
            customPadding=""
            customWidth="100%"
            customBackgroundHover="#d4a3f6"
            onClick={handleClick}
            isOpen={true}
          />
        </S.DivButtonProps>
      </S.DivTitleButton>
      <S.DivImgheart>
        <S.Imgheart src={Imgheart} alt="" />
      </S.DivImgheart>
    </S.Container>
  );
};

export default CardProduct;
