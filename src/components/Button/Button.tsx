import * as S from "../Button/Button.Styled";

interface IButton {
  name: string;
  customColors: string;
  customFontWeight: string;
  customFontsize: string;
  customHeight: string;
  customPadding: string;
  customWidth: string;
  customBackground: string;
  customFontFamily: string;
  customBorder: string
  customBorderRadius: string;
  customBackgroundHover:string;

  customBackgroundResponsive?: string;
  customColorResponsive?: string;
  customHouverBackgroundResponsive?: string;
  
  
  isOpen?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;

}

const ButtonProps = ({
  name,
  customColors,
  customFontWeight,
  customFontsize,
  customHeight,
  customPadding,
  customWidth,
  customBackground,
  customFontFamily,
  customBorder,
  customBorderRadius,
  customBackgroundHover,
  customBackgroundResponsive,
  customColorResponsive,
  customHouverBackgroundResponsive,
  onClick,
  isOpen,
  type
}: IButton) => {
  if (isOpen) {
    return (
      <>
        <S.Button
          customColors={customColors}
          customBackground={customBackground}
          customFontWeight={customFontWeight}
          customFontsize={customFontsize}
          customHeight={customHeight}
          customPadding={customPadding}
          customWidth={customWidth}
          customBorder={customBorder}
          customFontFamily={customFontFamily}
          customBackgroundHover={customBackgroundHover}
          customBorderRadius={customBorderRadius}
          customColorResponsive={customColorResponsive}
          customBackgroundResponsive={customBackgroundResponsive}
          customHouverBackgroundResponsive={customHouverBackgroundResponsive}
          onClick={onClick}
          type={type}
          
        >
          {name}
        </S.Button>
      </>
    );
  }
 
};

export default ButtonProps;
