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
              name="Fazer Login"
              customColors="#502B6B "
              customBackground="#DCB6F8"
              customFontWeight="700"
              customFontsize="1.2rem"
              customFontFamily="Sora"
              customHeight=""
              customPadding="6%"
              customWidth="21rem"
              customBackgroundHover="#d4a3f6"
              onClick={handleClick}
            />
            <button>teste</button>
    </S.Container>
  );
};

export default cardProduct;
