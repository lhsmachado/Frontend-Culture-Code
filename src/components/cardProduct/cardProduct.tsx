import * as S from "./CardProductStyled";
import ButtonProps from "../Button/Button";

import Imgheart from "../../assets/heart-line.svg";

interface ICardProductType {
  image: string | undefined;
  title: string;
  gems: number;
  onClick: () => void;
}

const CardProduct = ({ image, title, gems, onClick }: ICardProductType) => {
  const limitTitle = 40;

  return (
    <S.Container>
      <S.DivImg>
        <S.Image src={image} />
      </S.DivImg>
      <S.DivTitleButton>
        <S.DivTitle>
          <S.Title>
            {title.length <= limitTitle
              ? title
              : `${title.slice(0, limitTitle)}...`}
          </S.Title>
          <S.SubTitle>{gems} {Number(gems) > 1 ?"jóias" : "jóia"}</S.SubTitle>
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
            customBorderRadius="13px"
            customBorder="none"
            customPadding=""
            customWidth="100%"
            customBackgroundHover="#643883"
            onClick={onClick}
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
