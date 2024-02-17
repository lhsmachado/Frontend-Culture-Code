import * as S from "./ModalPrice.Styeld";
import ButtonProps from "../Button/Button";
import ModalEdit from "../Modal/ModalEdit";
import { MouseEventHandler } from "react";

const mobileStyles = {
  content: {
    width: "80%",
    height: "30%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    borderRadius: "10px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 5,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

interface IModalPrice {
  isOpen:boolean
  sliderValue:number
  onCloseModal: MouseEventHandler<HTMLButtonElement>;
  onChange: (event: any) => void;
  onClick: () => void;
}

const ModalPrice = ({onClick, onCloseModal ,  onChange , isOpen , sliderValue}: IModalPrice) => {
  const isMobile = window.innerWidth <= 728;

   return (
    <>
      {isMobile ? (
        <ModalEdit
          customStyles={mobileStyles}
          isOpen={isOpen}
          onCloseModal={onCloseModal}
        >
          <div>
            <S.Title>Buscar por quantidade de jóias</S.Title>
            <S.DivInput>
              <S.DivNumerInput>
                <S.NumberImput>1</S.NumberImput>
                <S.NumberImput>{sliderValue}</S.NumberImput>
              </S.DivNumerInput>
              <S.Input
                type="range"
                min={1}
                max={20}
                value={sliderValue}
                step={1}
                onChange={onChange}
              />
            </S.DivInput>
            <S.DivButton>
              <ButtonProps
                name="Ver resultados"
                customWidth="100%"
                customHeight="72px"
                customColors="#ffff"
                customFontFamily="Sora"
                customFontWeight="700"
                customFontsize="1.1rem"
                customBorder="none"
                customBorderRadius="16px"
                customPadding=""
                customBackground=" #502B6B"
                customBackgroundHover="#60357e"
                type="submit"
                isOpen={true}
                onClick={onClick}
              />
            </S.DivButton>
          </div>
        </ModalEdit>
      ) : null}
    </>
  );
};

export default ModalPrice;
