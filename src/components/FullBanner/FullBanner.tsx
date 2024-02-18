import * as S from "../FullBanner/FullBanner.Styled";
interface IBanner {
  children: React.ReactNode;
}

const FullBanner = ({ children }: IBanner) => {
  return <S.Container>{children}</S.Container>;
};

export default FullBanner;
