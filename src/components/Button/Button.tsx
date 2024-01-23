import * as S from "../Button/Button.Styled";

interface IButton {
  name: string;
}

const ButtonProps = ({ name }: IButton) => {
  return (
    <>
      <S.Button
        customColors=""
        customFontWeight=""
        customFontsize=""
        customHeight=""
        customPadding=""
        customWidth=""
      >
        {name}
      </S.Button>
    </>
  );
};

export default ButtonProps;
