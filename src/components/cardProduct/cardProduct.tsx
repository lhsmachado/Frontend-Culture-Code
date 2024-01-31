import ButtonProps from "../Button/Button";
import * as S from "./CardProductStyled";

type cardProductType = {
  image: string;
  title: string;
  gems: number;
  id: string;
};

const cardProduct = ({ image, title, gems, id }: cardProductType) => {

    function handleClick (){
        return(console.log('resgatou'))
    }
  return (
    <S.Container>
      <S.Image src={image} />
      <S.Title>{title}</S.Title>
      <S.SubTitle>{gems} jóias</S.SubTitle>
      <ButtonProps
              name="Resgatar"
              customColors="#FFFFFF "
              customBackground="#502B6B"
              customFontWeight="600"
              customFontsize="1.2rem"
              customFontFamily="Sora"
              customHeight="2.5rem"
              customPadding=""
              customWidth="14.875rem"
              customBackgroundHover="#d4a3f6"
              onClick={handleClick}
              isOpen={true}
            />
    </S.Container>
  );
};

export default cardProduct;
