import { MouseEventHandler } from "react";
import ButtonProps from "../Button/Button";
import ModalEdit from "../Modal/ModalEdit";
import * as S from "./ModalConfirmationRescued.Styled";
import ImgDiamont from "../../assets/diamondIcon.svg";

interface IModalConfirmationRescued {
  isOpen: boolean;
  nameProduct: string | undefined;
  price: number | undefined;
  rescued: () => void;
  closeModal: () => void;
  onCloseModal: MouseEventHandler<HTMLButtonElement>;
}

const customStylesCreateChannels = {
  content: {
    borderRadius: "10px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

const desktopStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "40%",
    height: "",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const mobileStyles = {
  content: {
    width: "80%",
    height: "30%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalConfirmationRescued = ({
  isOpen,
  rescued,
  price,
  nameProduct,
  closeModal,
  onCloseModal,
}: IModalConfirmationRescued) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <ModalEdit
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        customStyles={{
          ...customStylesCreateChannels,
          ...(isMobile ? mobileStyles : desktopStyles),
        }}
      >
        <S.Title>Quase lá! Confime o resgate da sua recompensa</S.Title>
        <S.Description>
          Você escolheru a recompensa “{nameProduct}” por:{" "}
          <S.TitleBalance>{price}</S.TitleBalance>
          <S.ImgDiamont src={ImgDiamont} alt="" />
        </S.Description>
        <S.DivButton>
          <ButtonProps
            name="Cancelar"
            customWidth="100%"
            customHeight="62px"
            customColors="#60357e"
            customFontFamily="Sora"
            customFontWeight="700"
            customFontsize="1.5rem"
            customBorder="2px solid #60357e"
            customBorderRadius="16px"
            customPadding=""
            customBackground=" #ffffff"
            customBackgroundHover="#ffffff"
            customColorResponsive="#60357e"
            customBackgroundResponsive=""
            customHouverBackgroundResponsive="#ffffff"
            onClick={closeModal}
            isOpen={true}
          />

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
            onClick={rescued}
            isOpen={true}
          />
        </S.DivButton>
      </ModalEdit>
    </>
  );
};

export default ModalConfirmationRescued;
