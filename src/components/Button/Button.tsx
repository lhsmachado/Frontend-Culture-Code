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
}: IButton) => {
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
        customFontFamily={customFontFamily}
      >
        {name}
      </S.Button>
    </>
  );
};

export default ButtonProps;
