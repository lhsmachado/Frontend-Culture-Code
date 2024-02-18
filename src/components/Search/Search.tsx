import * as S from "../Search/Search.Styled";
import ImgSearch from "../../assets/search.png";
import ImgGroup from "../../assets/Group.svg";

interface ISearchProps {
  onKeyDown: any;
  onClick: () => void;
}

const Search = ({ onKeyDown ,onClick}: ISearchProps) => {
  return (
    <S.Container>
      <S.ImgSearch src={ImgSearch} alt="" />
      <S.Input
        type="text"
        placeholder="O que você está buscando?"
        onKeyDown={onKeyDown}
      />
      <S.ButtonImgGroup onClick={onClick}>
        <S.ImgGroup src={ImgGroup} alt="" />
      </S.ButtonImgGroup>
    </S.Container>
  );
};

export default Search;
