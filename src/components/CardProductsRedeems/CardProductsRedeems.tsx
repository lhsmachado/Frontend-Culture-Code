import * as S from "../CardProductsRedeems/CardProductsRedeems.Styled";
import ButtonProps from "../Button/Button";
import ImgPhone from "../../assets/headset.png";
import CardRedeemFor from "../CardRedeemFor/CardRedeemFor";
import CardMyBalance from "../CardMyBalance/CardMyBalance";

const CardProductsRedeems = () => {
  const handleFake = () => {
    console.log("estou esperando funcionar");
  };
  return (
    <S.Container>
      <S.DivMyBalance>
        <CardMyBalance />
      </S.DivMyBalance>
      <S.DivImage>
        <S.Image src={ImgPhone} />
      </S.DivImage>
      <S.DivDescription>
        <div>
          <S.Title>Headphine W820BT Bluetooth over-ear edifier</S.Title>
        </div>
        <S.DivCardRedeemFor>
          <CardRedeemFor />
        </S.DivCardRedeemFor>
        <S.DivTextDescription>
          <S.TextDescription>
            O Fone de ouvido Headphone Bluetooth Edifier W820BT 80 Horas é um
            fone completo que oferece um áudio preciso em seus agudos e graves,
            com total conforto e equilíbrio que um Over-Ear pode lhe oferecer.
            Experimente áudio de altíssima qualidade, garantida por meio de uma
            conexão sem fio com sinal firme e estável, otimizada pela tecnologia
            CSR adicionada ao Bluetooth 4.1 O Fone de ouvido Headphone Bluetooth
            Edifier W820BT 80 Horas é um fone completo que oferece um áudio
            preciso em seus agudos e graves, com total conforto e equilíbrio que
            um Over-Ear pode lhe oferecer. Experimente áudio de altíssima
            qualidade, garantida por meio de uma conexão sem fio com sinal firme
            e estável, otimizada pela tecnologia CSR adicionada ao Bluetooth 4.1
          </S.TextDescription>
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
            customBorderRadius="16px"
            customPadding=""
            customBackground=" #502B6B"
            customBackgroundHover="#60357e"
            onClick={handleFake}
            isOpen={true}
          />
        </S.DivButton>
      </S.DivDescription>
    </S.Container>
  );
};

export default CardProductsRedeems;
