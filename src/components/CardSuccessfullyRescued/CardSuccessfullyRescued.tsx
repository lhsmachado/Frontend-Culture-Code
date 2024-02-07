import ButtonProps from '../Button/Button';
import CardMyBalance from '../CardMyBalance/CardMyBalance';
import CardRedeemFor from '../CardRedeemFor/CardRedeemFor';
import ImgPhone from "../../assets/Group8.png";
import * as S from './CardSuccessfullyRescued.Styled'

const CardSuccessfullyRescued = () => {
 
    const handleFake = () => {
        console.log("estou esperando funcionar");
      };
      return (
        <S.Container>
          
          <S.DivImage>
            <S.Image src={ImgPhone} />
          </S.DivImage>
          <S.DivDescription>
            <S.DivTitleProduct>
              <S.Title>Produto resgatado com sucesso!</S.Title>
            </S.DivTitleProduct>
            <S.DivCardRedeemFor>
              <CardRedeemFor />
            </S.DivCardRedeemFor>
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
  )
}

export default CardSuccessfullyRescued